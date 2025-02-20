/**
 * Generated by karavan build tools - do NOT edit this file!
 */
export class DataFormat {
    id?: string = ''

    constructor(id?: string) {
        this.id = id;
    }
}
export class ASN1DataFormat extends DataFormat{
    id?: string; 
    unmarshalType?: string; 
    usingIterator?: boolean; 

    public constructor(init?: Partial<ASN1DataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class Any23DataFormat extends DataFormat{
    baseUri?: string; 
    configuration?: []; 
    extractors?: []; 
    id?: string; 
    outputFormat?: string; 

    public constructor(init?: Partial<Any23DataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class AvroDataFormat extends DataFormat{
    allowJmsType?: boolean; 
    allowUnmarshallType?: boolean; 
    autoDiscoverObjectMapper?: boolean; 
    autoDiscoverSchemaResolver?: boolean; 
    collectionType?: string; 
    contentTypeHeader?: boolean; 
    disableFeatures?: string; 
    enableFeatures?: string; 
    id?: string; 
    include?: string; 
    instanceClassName?: string; 
    jsonView?: string; 
    library?: 'ApacheAvro' | 'Jackson' | 'dataFormatName'; 
    moduleClassNames?: string; 
    moduleRefs?: string; 
    objectMapper?: string; 
    schemaResolver?: string; 
    timezone?: string; 
    unmarshalType?: string; 
    useDefaultObjectMapper?: boolean; 
    useList?: boolean; 

    public constructor(init?: Partial<AvroDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class BarcodeDataFormat extends DataFormat{
    barcodeFormat?: string; 
    height?: number; 
    id?: string; 
    imageType?: string; 
    width?: number; 

    public constructor(init?: Partial<BarcodeDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class Base64DataFormat extends DataFormat{
    id?: string; 
    lineLength?: number; 
    lineSeparator?: string; 
    urlSafe?: boolean; 

    public constructor(init?: Partial<Base64DataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class BeanioDataFormat extends DataFormat{
    beanReaderErrorHandlerType?: string; 
    encoding?: string; 
    id?: string; 
    ignoreInvalidRecords?: boolean; 
    ignoreUnexpectedRecords?: boolean; 
    ignoreUnidentifiedRecords?: boolean; 
    mapping?: string; 
    streamName?: string; 
    unmarshalSingleObject?: boolean; 

    public constructor(init?: Partial<BeanioDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class BindyDataFormat extends DataFormat{
    allowEmptyStream?: boolean; 
    classType?: string; 
    id?: string; 
    locale?: string; 
    type?: string; 
    unwrapSingleInstance?: boolean; 

    public constructor(init?: Partial<BindyDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class CBORDataFormat extends DataFormat{
    allowJmsType?: boolean; 
    allowUnmarshallType?: boolean; 
    collectionType?: string; 
    disableFeatures?: string; 
    enableFeatures?: string; 
    id?: string; 
    objectMapper?: string; 
    prettyPrint?: boolean; 
    unmarshalType?: string; 
    useDefaultObjectMapper?: boolean; 
    useList?: boolean; 

    public constructor(init?: Partial<CBORDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class CryptoDataFormat extends DataFormat{
    algorithm?: string; 
    algorithmParameterRef?: string; 
    buffersize?: number; 
    cryptoProvider?: string; 
    id?: string; 
    initVectorRef?: string; 
    inline?: boolean; 
    keyRef?: string; 
    macAlgorithm?: string; 
    shouldAppendHmac?: boolean; 

    public constructor(init?: Partial<CryptoDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class CsvDataFormat extends DataFormat{
    allowMissingColumnNames?: boolean; 
    captureHeaderRecord?: boolean; 
    commentMarker?: string; 
    commentMarkerDisabled?: boolean; 
    delimiter?: string; 
    escape?: string; 
    escapeDisabled?: boolean; 
    formatName?: string; 
    formatRef?: string; 
    header?: []; 
    headerDisabled?: boolean; 
    id?: string; 
    ignoreEmptyLines?: boolean; 
    ignoreHeaderCase?: boolean; 
    ignoreSurroundingSpaces?: boolean; 
    lazyLoad?: boolean; 
    marshallerFactoryRef?: string; 
    nullString?: string; 
    nullStringDisabled?: boolean; 
    quote?: string; 
    quoteDisabled?: boolean; 
    quoteMode?: string; 
    recordConverterRef?: string; 
    recordSeparator?: string; 
    recordSeparatorDisabled?: string; 
    skipHeaderRecord?: boolean; 
    trailingDelimiter?: boolean; 
    trim?: boolean; 
    useMaps?: boolean; 
    useOrderedMaps?: boolean; 

    public constructor(init?: Partial<CsvDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class CustomDataFormat extends DataFormat{
    id?: string; 
    ref?: string; 

    public constructor(init?: Partial<CustomDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class FhirJsonDataFormat extends DataFormat{
    contentTypeHeader?: boolean; 
    dontEncodeElements?: []; 
    dontStripVersionsFromReferencesAtPaths?: []; 
    encodeElements?: []; 
    encodeElementsAppliesToChildResourcesOnly?: boolean; 
    fhirVersion?: string; 
    id?: string; 
    omitResourceId?: boolean; 
    overrideResourceIdWithBundleEntryFullUrl?: boolean; 
    prettyPrint?: boolean; 
    serverBaseUrl?: string; 
    stripVersionsFromReferences?: boolean; 
    summaryMode?: boolean; 
    suppressNarratives?: boolean; 

    public constructor(init?: Partial<FhirJsonDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class FhirXmlDataFormat extends DataFormat{
    contentTypeHeader?: boolean; 
    dontEncodeElements?: []; 
    dontStripVersionsFromReferencesAtPaths?: []; 
    encodeElements?: []; 
    encodeElementsAppliesToChildResourcesOnly?: boolean; 
    fhirVersion?: string; 
    id?: string; 
    omitResourceId?: boolean; 
    overrideResourceIdWithBundleEntryFullUrl?: boolean; 
    prettyPrint?: boolean; 
    serverBaseUrl?: string; 
    stripVersionsFromReferences?: boolean; 
    summaryMode?: boolean; 
    suppressNarratives?: boolean; 

    public constructor(init?: Partial<FhirXmlDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class FlatpackDataFormat extends DataFormat{
    allowShortLines?: boolean; 
    definition?: string; 
    delimiter?: string; 
    fixed?: boolean; 
    id?: string; 
    ignoreExtraColumns?: boolean; 
    ignoreFirstRecord?: boolean; 
    parserFactoryRef?: string; 
    textQualifier?: string; 

    public constructor(init?: Partial<FlatpackDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class GrokDataFormat extends DataFormat{
    allowMultipleMatchesPerLine?: boolean; 
    flattened?: boolean; 
    id?: string; 
    namedOnly?: boolean; 
    pattern?: string; 

    public constructor(init?: Partial<GrokDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class GzipDataFormat extends DataFormat{
    id?: string; 

    public constructor(init?: Partial<GzipDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class HL7DataFormat extends DataFormat{
    id?: string; 
    validate?: boolean; 

    public constructor(init?: Partial<HL7DataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class IcalDataFormat extends DataFormat{
    id?: string; 
    validating?: boolean; 

    public constructor(init?: Partial<IcalDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class JacksonXMLDataFormat extends DataFormat{
    allowJmsType?: boolean; 
    allowUnmarshallType?: boolean; 
    collectionType?: string; 
    contentTypeHeader?: boolean; 
    disableFeatures?: string; 
    enableFeatures?: string; 
    enableJaxbAnnotationModule?: boolean; 
    id?: string; 
    include?: string; 
    jsonView?: string; 
    moduleClassNames?: string; 
    moduleRefs?: string; 
    prettyPrint?: boolean; 
    unmarshalType?: string; 
    useList?: boolean; 
    xmlMapper?: string; 

    public constructor(init?: Partial<JacksonXMLDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class JaxbDataFormat extends DataFormat{
    contentTypeHeader?: boolean; 
    contextPath?: string; 
    contextPathIsClassName?: boolean; 
    encoding?: string; 
    filterNonXmlChars?: boolean; 
    fragment?: boolean; 
    id?: string; 
    ignoreJaxbElement?: boolean; 
    jaxbProviderProperties?: string; 
    mustBeJaxbElement?: boolean; 
    namespacePrefixRef?: string; 
    noNamespaceSchemaLocation?: string; 
    objectFactory?: boolean; 
    partClass?: string; 
    partNamespace?: string; 
    prettyPrint?: boolean; 
    schema?: string; 
    schemaLocation?: string; 
    schemaSeverityLevel?: number; 
    xmlStreamWriterWrapper?: string; 

    public constructor(init?: Partial<JaxbDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class JsonApiDataFormat extends DataFormat{
    id?: string; 
    mainFormatType?: string; 

    public constructor(init?: Partial<JsonApiDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class JsonDataFormat extends DataFormat{
    allowJmsType?: boolean; 
    allowUnmarshallType?: boolean; 
    autoDiscoverObjectMapper?: boolean; 
    autoDiscoverSchemaResolver?: boolean; 
    collectionType?: string; 
    contentTypeHeader?: boolean; 
    disableFeatures?: string; 
    dropRootNode?: boolean; 
    enableFeatures?: string; 
    id?: string; 
    include?: string; 
    jsonView?: string; 
    library?: 'Fastjson' | 'Gson' | 'Jackson' | 'Johnzon' | 'Jsonb' | 'XStream'; 
    moduleClassNames?: string; 
    moduleRefs?: string; 
    objectMapper?: string; 
    permissions?: string; 
    prettyPrint?: boolean; 
    schemaResolver?: string; 
    timezone?: string; 
    unmarshalType?: string; 
    useDefaultObjectMapper?: boolean; 
    useList?: boolean; 

    public constructor(init?: Partial<JsonDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class LZFDataFormat extends DataFormat{
    id?: string; 
    usingParallelCompression?: boolean; 

    public constructor(init?: Partial<LZFDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class MimeMultipartDataFormat extends DataFormat{
    binaryContent?: boolean; 
    headersInline?: boolean; 
    id?: string; 
    includeHeaders?: string; 
    multipartSubType?: string; 
    multipartWithoutAttachment?: boolean; 

    public constructor(init?: Partial<MimeMultipartDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class PGPDataFormat extends DataFormat{
    algorithm?: number; 
    armored?: boolean; 
    compressionAlgorithm?: number; 
    hashAlgorithm?: number; 
    id?: string; 
    integrity?: boolean; 
    keyFileName?: string; 
    keyUserid?: string; 
    password?: string; 
    provider?: string; 
    signatureKeyFileName?: string; 
    signatureKeyRing?: string; 
    signatureKeyUserid?: string; 
    signaturePassword?: string; 
    signatureVerificationOption?: string; 

    public constructor(init?: Partial<PGPDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class ProtobufDataFormat extends DataFormat{
    allowJmsType?: boolean; 
    allowUnmarshallType?: boolean; 
    autoDiscoverObjectMapper?: boolean; 
    autoDiscoverSchemaResolver?: boolean; 
    collectionType?: string; 
    contentTypeFormat?: string; 
    contentTypeHeader?: boolean; 
    disableFeatures?: string; 
    enableFeatures?: string; 
    id?: string; 
    include?: string; 
    instanceClass?: string; 
    jsonView?: string; 
    library?: 'GoogleProtobuf' | 'Jackson' | 'dataFormatName'; 
    moduleClassNames?: string; 
    moduleRefs?: string; 
    objectMapper?: string; 
    schemaResolver?: string; 
    timezone?: string; 
    unmarshalType?: string; 
    useDefaultObjectMapper?: boolean; 
    useList?: boolean; 

    public constructor(init?: Partial<ProtobufDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class RssDataFormat extends DataFormat{
    id?: string; 

    public constructor(init?: Partial<RssDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class SoapJaxbDataFormat extends DataFormat{
    contextPath?: string; 
    elementNameStrategyRef?: string; 
    encoding?: string; 
    id?: string; 
    namespacePrefixRef?: string; 
    schema?: string; 
    version?: string; 

    public constructor(init?: Partial<SoapJaxbDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class SyslogDataFormat extends DataFormat{
    id?: string; 

    public constructor(init?: Partial<SyslogDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class TarFileDataFormat extends DataFormat{
    allowEmptyDirectory?: boolean; 
    id?: string; 
    maxDecompressedSize?: number; 
    preservePathElements?: boolean; 
    usingIterator?: boolean; 

    public constructor(init?: Partial<TarFileDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class ThriftDataFormat extends DataFormat{
    contentTypeFormat?: string; 
    contentTypeHeader?: boolean; 
    id?: string; 
    instanceClass?: string; 

    public constructor(init?: Partial<ThriftDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class TidyMarkupDataFormat extends DataFormat{
    dataObjectType?: string; 
    id?: string; 
    omitXmlDeclaration?: boolean; 

    public constructor(init?: Partial<TidyMarkupDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class UniVocityCsvDataFormat extends DataFormat{
    asMap?: boolean; 
    comment?: string; 
    delimiter?: string; 
    emptyValue?: string; 
    headerExtractionEnabled?: boolean; 
    headersDisabled?: boolean; 
    id?: string; 
    ignoreLeadingWhitespaces?: boolean; 
    ignoreTrailingWhitespaces?: boolean; 
    lazyLoad?: boolean; 
    lineSeparator?: string; 
    normalizedLineSeparator?: string; 
    nullValue?: string; 
    numberOfRecordsToRead?: number; 
    quote?: string; 
    quoteAllFields?: boolean; 
    quoteEscape?: string; 
    skipEmptyLines?: boolean; 
    univocityHeader?: []; 

    public constructor(init?: Partial<UniVocityCsvDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class UniVocityFixedWidthDataFormat extends DataFormat{
    asMap?: boolean; 
    comment?: string; 
    emptyValue?: string; 
    headerExtractionEnabled?: boolean; 
    headersDisabled?: boolean; 
    id?: string; 
    ignoreLeadingWhitespaces?: boolean; 
    ignoreTrailingWhitespaces?: boolean; 
    lazyLoad?: boolean; 
    lineSeparator?: string; 
    normalizedLineSeparator?: string; 
    nullValue?: string; 
    numberOfRecordsToRead?: number; 
    padding?: string; 
    recordEndsOnNewline?: boolean; 
    skipEmptyLines?: boolean; 
    skipTrailingCharsUntilNewline?: boolean; 
    univocityHeader?: []; 

    public constructor(init?: Partial<UniVocityFixedWidthDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class UniVocityHeader extends DataFormat{
    length?: string; 
    name?: string; 

    public constructor(init?: Partial<UniVocityHeader>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class UniVocityTsvDataFormat extends DataFormat{
    asMap?: boolean; 
    comment?: string; 
    emptyValue?: string; 
    escapeChar?: string; 
    headerExtractionEnabled?: boolean; 
    headersDisabled?: boolean; 
    id?: string; 
    ignoreLeadingWhitespaces?: boolean; 
    ignoreTrailingWhitespaces?: boolean; 
    lazyLoad?: boolean; 
    lineSeparator?: string; 
    normalizedLineSeparator?: string; 
    nullValue?: string; 
    numberOfRecordsToRead?: number; 
    skipEmptyLines?: boolean; 
    univocityHeader?: []; 

    public constructor(init?: Partial<UniVocityTsvDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class XMLSecurityDataFormat extends DataFormat{
    addKeyValueForEncryptedKey?: boolean; 
    digestAlgorithm?: string; 
    id?: string; 
    keyCipherAlgorithm?: string; 
    keyOrTrustStoreParametersRef?: string; 
    keyPassword?: string; 
    mgfAlgorithm?: string; 
    passPhrase?: string; 
    passPhraseByte?: string; 
    recipientKeyAlias?: string; 
    secureTag?: string; 
    secureTagContents?: boolean; 
    xmlCipherAlgorithm?: string; 

    public constructor(init?: Partial<XMLSecurityDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class XStreamDataFormat extends DataFormat{
    aliases?: []; 
    contentTypeHeader?: boolean; 
    converters?: []; 
    driver?: string; 
    driverRef?: string; 
    encoding?: string; 
    id?: string; 
    implicitCollections?: []; 
    mode?: string; 
    omitFields?: []; 
    permissions?: string; 

    public constructor(init?: Partial<XStreamDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class XmlRpcDataFormat extends DataFormat{
    id?: string; 
    request?: boolean; 

    public constructor(init?: Partial<XmlRpcDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class YAMLDataFormat extends DataFormat{
    allowAnyType?: boolean; 
    allowRecursiveKeys?: boolean; 
    _constructor?: string; 
    dumperOptions?: string; 
    id?: string; 
    library?: 'SnakeYAML'; 
    maxAliasesForCollections?: number; 
    prettyFlow?: boolean; 
    representer?: string; 
    resolver?: string; 
    typeFilter?: []; 
    unmarshalType?: string; 
    useApplicationContextClassLoader?: boolean; 

    public constructor(init?: Partial<YAMLDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class YAMLTypeFilterDefinition extends DataFormat{
    type?: string; 
    value?: string; 

    public constructor(init?: Partial<YAMLTypeFilterDefinition>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class ZipDeflaterDataFormat extends DataFormat{
    compressionLevel?: number; 
    id?: string; 

    public constructor(init?: Partial<ZipDeflaterDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

export class ZipFileDataFormat extends DataFormat{
    allowEmptyDirectory?: boolean; 
    id?: string; 
    maxDecompressedSize?: number; 
    preservePathElements?: boolean; 
    usingIterator?: boolean; 

    public constructor(init?: Partial<ZipFileDataFormat>) {
        super(init?.id);
        Object.assign(this, init);
    }
}

