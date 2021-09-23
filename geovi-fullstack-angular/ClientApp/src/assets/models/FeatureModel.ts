export interface FeatureModel
{
  id: number;
  title: string;
  description: string;
  url : string
}

const nameof = <T>(name: keyof T) => name;
export class FeatureModelJSON {
  currentVersion:                     number;
  id:                                 number;
  name:                               string;
  type:                               string;
  serviceItemId:                      string;
  cacheMaxAge:                        number;
  displayField:                       string;
  description:                        string;
  copyrightText:                      string;
  defaultVisibility:                  boolean;
  editingInfo:                        EditingInfo;
  relationships:                      any[];
  isDataVersioned:                    boolean;
  hasContingentValuesDefinition:      boolean;
  supportsAppend:                     boolean;
  supportsCalculate:                  boolean;
  supportsASyncCalculate:             boolean;
  supportsTruncate:                   boolean;
  supportsAttachmentsByUploadId:      boolean;
  supportsAttachmentsResizing:        boolean;
  supportsRollbackOnFailureParameter: boolean;
  supportsStatistics:                 boolean;
  supportsExceedsLimitStatistics:     boolean;
  supportsAdvancedQueries:            boolean;
  supportsValidateSql:                boolean;
  supportsCoordinatesQuantization:    boolean;
  supportsLayerOverrides:             boolean;
  supportsTilesAndBasicQueriesMode:   boolean;
  supportsFieldDescriptionProperty:   boolean;
  supportsQuantizationEditMode:       boolean;
  supportsApplyEditsWithGlobalIds:    boolean;
  supportsReturningQueryGeometry:     boolean;
  advancedQueryCapabilities:          AdvancedQueryCapabilities;
  advancedEditingCapabilities:        AdvancedEditingCapabilities;
  useStandardizedQueries:             boolean;
  geometryType:                       string;
  minScale:                           number;
  maxScale:                           number;
  extent:                             Extent;
  drawingInfo:                        DrawingInfo;
  allowGeometryUpdates:               boolean;
  hasAttachments:                     boolean;
  htmlPopupType:                      string;
  hasM:                               boolean;
  hasZ:                               boolean;
  objectIdField:                      string;
  uniqueIdField:                      UniqueIDField;
  globalIdField:                      string;
  typeIdField:                        string;
  fields:                             Field[];
  indexes:                            Index[];
  dateFieldsTimeReference:            DateFieldsTimeReference;
  preferredTimeReference:             null;
  types:                              any[];
  templates:                          Template[];
  supportedQueryFormats:              string;
  supportedAppendFormats:             string;
  supportedExportFormats:             string;
  supportedContingentValuesFormats:   string;
  hasStaticData:                      boolean;
  maxRecordCount:                     number;
  standardMaxRecordCount:             number;
  standardMaxRecordCountNoGeometry:   number;
  tileMaxRecordCount:                 number;
  maxRecordCountFactor:               number;
  capabilities:                       string;
}

export interface AdvancedEditingCapabilities {
  supportedSqlFormatsInCalculate: string[];
  supportsAsyncApplyEdits:        boolean;
  supportsReturnEditResults:      boolean;
}

export interface AdvancedQueryCapabilities {
  supportsPagination:                    boolean;
  supportsPaginationOnAggregatedQueries: boolean;
  supportsQueryRelatedPagination:        boolean;
  supportsQueryWithDistance:             boolean;
  supportsReturningQueryExtent:          boolean;
  supportsStatistics:                    boolean;
  supportsOrderBy:                       boolean;
  supportsDistinct:                      boolean;
  supportsQueryWithResultType:           boolean;
  supportsSqlExpression:                 boolean;
  supportsAdvancedQueryRelated:          boolean;
  supportsCountDistinct:                 boolean;
  supportsPercentileStatistics:          boolean;
  supportsLod:                           boolean;
  supportsQueryWithLodSR:                boolean;
  supportedLodTypes:                     string[];
  supportsReturningGeometryCentroid:     boolean;
  supportsQueryWithDatumTransformation:  boolean;
  supportsHavingClause:                  boolean;
  supportsOutFieldSQLExpression:         boolean;
  supportsMaxRecordCountFactor:          boolean;
  supportsTopFeaturesQuery:              boolean;
  supportsDisjointSpatialRel:            boolean;
  supportsQueryWithCacheHint:            boolean;
  supportsQueryAnalytic:                 boolean;
}

export interface DateFieldsTimeReference {
  timeZone:               string;
  respectsDaylightSaving: boolean;
}

export interface DrawingInfo {
  renderer:     Renderer;
  transparency: number;
}

export interface Renderer {
  type:   string;
  symbol: Symbol;
}

export interface Symbol {
  angle:       number;
  xoffset:     number;
  yoffset:     number;
  type:        string;
  url:         string;
  imageData:   string;
  contentType: string;
  width:       number;
  height:      number;
}

export interface EditingInfo {
  lastEditDate: any;
}

export interface Extent {
  xmin:             number;
  ymin:             number;
  xmax:             number;
  ymax:             number;
  spatialReference: SpatialReference;
}

export interface SpatialReference {
  wkid:       number;
  latestWkid: number;
}

export interface Field {
  name:         string;
  type:         string;
  alias:        string;
  sqlType:      string;
  nullable:     boolean;
  editable:     boolean;
  domain:       null;
  defaultValue: null;
  length?:      number;
}

export interface Index {
  name:        string;
  fields:      string;
  isAscending: boolean;
  isUnique:    boolean;
  description: string;
}

export interface Template {
  name:        string;
  description: string;
  drawingTool: string;
  prototype:   Prototype;
}

export interface Prototype {
  attributes: Attributes;
}

export interface Attributes {
  text:       null;
  formOfNode: null;
  gml_id:     null;
  identifier: null;
  localId:    null;
  namespace:  null;
}

export interface UniqueIDField {
  name:               string;
  isSystemMaintained: boolean;
}


