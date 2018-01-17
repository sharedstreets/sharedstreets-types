/** Properties of a GISSectionMetadata. */
export interface GISSectionMetadata {

  /** GISSectionMetadata sectionId */
  sectionId?: string;

  /** GISSectionMetadata sectionProperties */
  sectionProperties?: string;
}

/** Properties of a GISMetadata. */
export interface GISMetadata {

  /** GISMetadata source */
  source?: string;

  /** GISMetadata sections */
  sections?: GISSectionMetadata[];
}

/** RoadClass enum. */
export enum RoadClass {
  Motorway = 0,
  Trunk = 1,
  Primary = 2,
  Secondary = 3,
  Tertiary = 4,
  Residential = 5,
  Unclassified = 6,
  Service = 7,
  Other = 8
}

/** Properties of a WaySection. */
export interface WaySection {

  /** WaySection wayId */
  wayId?: number;

  /** WaySection roadClass */
  roadClass?: RoadClass;

  /** WaySection oneWay */
  oneWay?: boolean;

  /** WaySection roundabout */
  roundabout?: boolean;

  /** WaySection link */
  link?: boolean;

  /** WaySection nodeIds */
  nodeIds?: (number)[];
}

/** Properties of a OSMMetadata. */
export interface OSMMetadata {

  /** OSMMetadata waySections */
  waySections?: WaySection[];
}

/** Properties of a SharedStreetsMetadata. */
export interface SharedStreetsMetadata {

  /** SharedStreetsMetadata geometryID */
  geometryID?: string;

  /** SharedStreetsMetadata osmMetadata */
  osmMetadata?: OSMMetadata;

  /** SharedStreetsMetadata gisMetadata */
  gisMetadata?: GISMetadata[];
}

/** Properties of a SharedStreetsGeometry. */
export interface SharedStreetsGeometry {

  /** SharedStreetsGeometry id */
  id?: string;

  /** SharedStreetsGeometry fromIntersectionId */
  fromIntersectionId?: string;

  /** SharedStreetsGeometry toIntersectionId */
  toIntersectionId?: string;

  /** SharedStreetsGeometry forwardReferenceId */
  forwardReferenceId?: string;

  /** SharedStreetsGeometry backReferenceId */
  backReferenceId?: string;

  /** SharedStreetsGeometry roadClass */
  roadClass?: RoadClass;

  /** SharedStreetsGeometry latlons */
  latlons?: number[];
}

/** Properties of a LocationReference. */
export interface LocationReference {

  /** LocationReference intersectionId */
  intersectionId?: string;

  /** LocationReference lat */
  lat?: number;

  /** LocationReference lon */
  lon?: number;

  /** LocationReference inboundBearing */
  inboundBearing?: number;

  /** LocationReference outboundBearing */
  outboundBearing?: number;

  /** LocationReference distanceToNextRef */
  distanceToNextRef?: number;
}

/** Properties of a SharedStreetsReference. */
export interface ISharedStreetsReference {

  /** SharedStreetsReference id */
  id?: string;

  /** SharedStreetsReference geometryId */
  geometryId?: string;

  /** SharedStreetsReference formOfWay */
  formOfWay?: FormOfWay;

  /** SharedStreetsReference locationReferences */
  locationReferences?: LocationReference[];
}

/** FormOfWay enum. */
export enum FormOfWay {
  Undefined = 0,
  Motorway = 1,
  MultipleCarriageway = 2,
  SingleCarriageway = 3,
  Roundabout = 4,
  TrafficSquare = 5,
  SlipRoad = 6,
  Other = 7
}

/** Properties of a SharedStreetsIntersection. */
export interface SharedStreetsIntersection {

  /** SharedStreetsIntersection id */
  id?: string;

  /** SharedStreetsIntersection nodeId */
  nodeId?: number;

  /** SharedStreetsIntersection lat */
  lat?: number;

  /** SharedStreetsIntersection lon */
  lon?: number;

  /** SharedStreetsIntersection inboundReferenceIds */
  inboundReferenceIds?: string[];

  /** SharedStreetsIntersection outboundReferenceIds */
  outboundReferenceIds?: string[];
}
