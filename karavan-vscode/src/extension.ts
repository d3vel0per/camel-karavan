/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { CamelDefinitionYaml } from "karavan-core/lib/api/CamelDefinitionYaml";
import * as jsyaml from 'js-yaml';
import { Integration } from "karavan-core/lib/model/IntegrationDefinition";
import { homedir } from "os";

const KARAVAN_LOADED = "karavan:loaded";
const KARAVAN_PANELS: Map<string, vscode.WebviewPanel> = new Map<string, vscode.WebviewPanel>();
const TERMINALS: Map<string, vscode.Terminal> = new Map<string, vscode.Terminal>();

export function activate(context: vscode.ExtensionContext) {
    const webviewContent = fs
        .readFileSync(
            vscode.Uri.joinPath(context.extensionUri, "dist/index.html").fsPath,
            { encoding: "utf-8" }
        )
        .replace(
            "styleUri",
            vscode.Uri.joinPath(context.extensionUri, "/dist/main.css")
                .with({ scheme: "vscode-resource" })
                .toString()
        )
        .replace(
            "scriptUri",
            vscode.Uri.joinPath(context.extensionUri, "/dist/webview.js")
                .with({ scheme: "vscode-resource" })
                .toString()
        );

    // Create new Camel-K Integration CRD command
    const createCrd = vscode.commands.registerCommand("karavan.create-crd", () => createIntegration(context, webviewContent, true));
    context.subscriptions.push(createCrd);

    // Create new Camel Integration YAML command
    const createYaml = vscode.commands.registerCommand("karavan.create-yaml", () => createIntegration(context, webviewContent, false));
    context.subscriptions.push(createYaml);

    // Open Camel-K integration in designer
    const open = vscode.commands.registerCommand(
        "karavan.open",
        (...args: any[]) => {
            if (args && args.length > 0) {
                const yaml = fs.readFileSync(path.resolve(args[0].fsPath)).toString('utf8');
                const filename = path.basename(args[0].fsPath);
                const relativePath = getRalativePath(args[0].path);
                const integration = parceYaml(filename, yaml);
                if (integration[0]) {
                    openKaravanWebView(context, webviewContent, filename, relativePath, integration[1]);
                } else {
                    vscode.window.showErrorMessage("File is not Camel Integration!")
                }
            }
        }
    );
    context.subscriptions.push(open);

    // Run Camel-K integration in designer
    const run = vscode.commands.registerCommand(
        "karavan.jbang-run",
        (...args: any[]) => {
            if (args && args.length > 0) {
                if (args[0].fsPath.startsWith('webview-panel/webview')) {
                    const filename = Array.from(KARAVAN_PANELS.entries()).filter(({ 1: v }) => v.active).map(([k]) => k)[0];
                    if (filename) {
                        runCamelJbang(filename);
                    }
                } else {
                    const yaml = fs.readFileSync(path.resolve(args[0].fsPath)).toString('utf8');
                    const relativePath = getRalativePath(args[0].fsPath);
                    const filename = path.basename(args[0].path);
                    const integration = parceYaml(filename, yaml);
                    if (integration[0]) {
                        runCamelJbang(relativePath);
                    } else {
                        vscode.window.showErrorMessage("File is not Camel-K Integration!")
                    }
                }
            }
        }
    );
    context.subscriptions.push(run);
}

function openKaravanWebView(context: vscode.ExtensionContext, webviewContent: string, filename: string, relativePath: string, yaml?: string) {
    // Karavan webview
    const panel = vscode.window.createWebviewPanel(
        "karavan",
        filename,
        vscode.ViewColumn.One,
        {
            enableScripts: true,
            retainContextWhenHidden: true,
            localResourceRoots: [
                vscode.Uri.joinPath(context.extensionUri, "dist"),
            ],
        }
    );
    panel.webview.html = webviewContent;
    panel.iconPath = vscode.Uri.joinPath(
        context.extensionUri,
        "icons/icon.svg"
    );

    // Handle messages from the webview
    panel.webview.onDidReceiveMessage(
        message => {
            switch (message.command) {
                case 'save':
                    if (vscode.workspace.workspaceFolders) {
                        console.log(message);
                        const uriFolder: vscode.Uri = vscode.workspace.workspaceFolders[0].uri;
                        const uriFile: vscode.Uri = vscode.Uri.file(path.join(uriFolder.path, message.relativePath));
                        fs.writeFile(uriFile.fsPath, message.yaml, err => {
                            if (err) vscode.window.showErrorMessage("Error: " + err?.message);
                        });
                    }
                    break;
                case 'getData':
                    sendData(context, panel, filename, relativePath, yaml);
                    break;
            }
        },
        undefined,
        context.subscriptions
    );
    KARAVAN_PANELS.set(relativePath, panel);
    vscode.commands.executeCommand("setContext", KARAVAN_LOADED, true);
}

function sendData(context: vscode.ExtensionContext, panel: vscode.WebviewPanel, filename: string, relativePath: string, yaml?: string){

    // Read and send Kamelets
    console.log("Kamelets sent");
    panel.webview.postMessage({ command: 'kamelets', kamelets: readKamelets(context) });

    // Read and send Components
    console.log("Components sent");
    panel.webview.postMessage({ command: 'components', components: readComponents(context) });

    // Send integration
    panel.webview.postMessage({ command: 'open', filename: filename, relativePath: relativePath, yaml: yaml });
}

function createIntegration(context: vscode.ExtensionContext, webviewContent: string, crd: boolean) {
    vscode.window
        .showInputBox({
            title: crd ? "Create Camel-K Integration CRD" : "Create Camel Integration YAML",
            ignoreFocusOut: true,
            prompt: "Integration name",
            validateInput: (text: string): string | undefined => {
                if (!text || text.length === 0) {
                    return 'Name should not be empty';
                } else {
                    return undefined;
                }
            }
        }).then(value => {
            if (value) {
                const name = nameFromTitle(value);
                const i = Integration.createNew(name);
                i.crd = crd;
                const yaml = CamelDefinitionYaml.integrationToYaml(i);
                const filename = name.toLocaleLowerCase().endsWith('.yaml') ? name : name + '.yaml';
                openKaravanWebView(context, webviewContent, filename, filename, yaml);
            }
        });
}

function getRalativePath(fullPath: string): string {
    const root = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.path : "";
    const relativePath = path.resolve(fullPath).replace( path.resolve(root) + path.sep, '');
    return relativePath;
}

function readKamelets(context: vscode.ExtensionContext): string[] {
    const dir = path.join(context.extensionPath, 'kamelets');
    const yamls: string[] = fs.readdirSync(dir).filter(file => file.endsWith("yaml")).map(file => fs.readFileSync(dir + "/" + file, 'utf-8'));
    try {
        const kameletsPath: string = vscode.workspace.getConfiguration().get("Karavan.kameletsPath") || '';
        const kameletsDir = path.isAbsolute(kameletsPath) ? kameletsPath : path.resolve(kameletsPath);
        const customKamelets: string[] = fs.readdirSync(kameletsDir).filter(file => file.endsWith("yaml")).map(file => fs.readFileSync(kameletsDir + "/" + file, 'utf-8'));
        if (customKamelets && customKamelets.length > 0) yamls.push(...customKamelets);
    } catch (e) {

    }
    return yamls;
}

function readComponents(context: vscode.ExtensionContext): string[] {
    const dir = path.join(context.extensionPath, 'components');
    const jsons: string[] = fs.readdirSync(dir).filter(file => file.endsWith("json")).map(file => fs.readFileSync(dir + "/" + file, 'utf-8'));
    return jsons;
}

function parceYaml(filename: string, yaml: string): [boolean, string?] {
    const i = CamelDefinitionYaml.yamlToIntegration(filename, yaml);
    if (i.kind === 'Integration' && i.metadata.name) {
        return [true, yaml];
    } else {
        return [false, undefined];
    }
}

function runCamelJbang(filename: string) {
    const version = vscode.workspace.getConfiguration().get("camel.version");
    const maxMessages:number = vscode.workspace.getConfiguration().get("camel.maxMessages") || -1;
    const loggingLevel = vscode.workspace.getConfiguration().get("camel.loggingLevel");
    const reload = vscode.workspace.getConfiguration().get("camel.reload");
    const health = vscode.workspace.getConfiguration().get("camel.health");
    const messageTracing = vscode.workspace.getConfiguration().get("camel.messageTracing");
    const command = "jbang -Dcamel.jbang.version=" + version + " camel@apache/camel run " 
        + toCliFilename(filename)
        + (maxMessages > -1 ? " --max-messages=" + maxMessages : "")
        + " --logging-level=" + loggingLevel
        + (messageTracing ? " --trace" : "")
        + (reload ? " --reload" : "")
        + (health ? " --health" : "");
    const existTerminal = TERMINALS.get(filename);
    if (existTerminal) existTerminal.dispose();
    const terminal = vscode.window.createTerminal('Camel: ' + filename);
    TERMINALS.set(filename, terminal);
    terminal.show();
    terminal.sendText(command);
}

function toCliFilename(filename: string): string {
    return (/\s/).test(filename)
        ? '"' + filename + '"'
        : filename.replace(/\s/g, "\\ ");
}

function nameFromTitle(title: string): string {
    return title.replace(/[^a-z0-9+]+/gi, "-").toLowerCase();
}

export function deactivate() {
    vscode.commands.executeCommand("setContext", KARAVAN_LOADED, false);
}
