/** Properties of a GISSectionMetadata. */
export interface GISSectionMetadata {

  /**
   * GISSectionMetadata sectionId
   *
   * source specific id
   */
  sectionId?: string;

  /**
   * GISSectionMetadata sectionProperties
   *
   * source specific encoding of properties
   */
  sectionProperties?: string;
}

/** Properties of a GISMetadata. */
export interface GISMetadata {

  /**
   * GISMetadata source
   *
   * describes GIS source data (e.g. "gov.nyc:lion")
   */
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
  Other = 8,
}

/** Properties of a WaySection. */
export interface WaySection {

  /** WaySection wayId */
  wayId?: number;

  /** WaySection roadClass */
  roadClass?: string;

  /** WaySection oneWay */
  oneWay?: boolean;

  /** WaySection roundabout */
  roundabout?: boolean;

  /** WaySection link */
  link?: boolean;

  /** WaySection nodeIds */
  nodeIds?: number[];

  /** WaySection name */
  name?: string;
}

/** Properties of a OSMMetadata. */
export interface OSMMetadata {

  /** OSMMetadata waySections */
  waySections?: WaySection[];

  /** OSMMetadata name */
  name?: string;
}

/** Properties of a SharedStreetsMetadata. */
export interface SharedStreetsMetadata {

  /** SharedStreetsMetadata geometryId */
  geometryId?: string;

  /** SharedStreetsMetadata osmMetadata */
  osmMetadata?: OSMMetadata;

  /** SharedStreetsMetadata gisMetadata */
  gisMetadata?: GISMetadata[];
}

/** Properties of a SharedStreetsGeometry. */
export interface SharedStreetsGeometry {

  /** SharedStreetsGeometry id */
  id: string;

  /** SharedStreetsGeometry fromIntersectionId */
  fromIntersectionId?: string;

  /** SharedStreetsGeometry toIntersectionId */
  toIntersectionId?: string;

  /** SharedStreetsGeometry forwardReferenceId */
  forwardReferenceId?: string;

  /** SharedStreetsGeometry backReferenceId */
  backReferenceId?: string;

  /** SharedStreetsGeometry roadClass */
  roadClass?: string;

  /**
   * SharedStreetsGeometry lonlats
   *
   * interleaved lon/lat pairs in sequence
   */
  lonlats: number[];
}

/** Properties of a LocationReference. */
export interface LocationReference {

  /** LocationReference intersectionId */
  intersectionId: string;

  /** LocationReference lon */
  lon: number;

  /** LocationReference lat */
  lat: number;

  /**
   * LocationReference inboundBearing
   *
   * rounded to nearest degree 0-360 -- optional field, using proto3 oneof to allow for nulls
   */
  inboundBearing?: number;

  /**
   * LocationReference outboundBearing
   *
   * rounded to nearest degree 0-360 -- optional field, using proto3 oneof to allow for nulls
   */
  outboundBearing?: number;

  /**
   * LocationReference distanceToNextRef
   *
   * in centimeters -- max value of 15km -- optional field, using proto3 oneof to allow for nulls
   */
  distanceToNextRef?: number;
}

/** Properties of a SharedStreetsReference. */
export interface SharedStreetsReference {

  /** SharedStreetsReference id */
  id: string;

  /** SharedStreetsReference geometryId */
  geometryId: string;

  /** SharedStreetsReference formOfWay */
  formOfWay: number;

  /** SharedStreetsReference locationReferences */
  locationReferences: LocationReference[];
}

/** FormOfWay enum. */
export enum FormOfWay {
  Undefined = 0,
  Motorway = 1,
  MultipleCarriageway = 2,
  SingleCarriageway = 3,
  Roundabout = 4,
  /**
   * yikes: https://giphy.com/gifs/square-addis-meskel-GYb9s3Afw0cWA
   */
  TrafficSquare = 5,
  SlipRoad = 6,
  Other = 7,
}

/** Properties of a SharedStreetsIntersection. */
export interface SharedStreetsIntersection {

  /** SharedStreetsIntersection id */
  id: string;

  /** SharedStreetsIntersection nodeId */
  nodeId?: number;

  /** SharedStreetsIntersection lon */
  lon: number;

  /** SharedStreetsIntersection lat */
  lat: number;

  /** SharedStreetsIntersection inboundReferenceIds */
  inboundReferenceIds?: string[];

  /** SharedStreetsIntersection outboundReferenceIds */
  outboundReferenceIds?: string[];
}
