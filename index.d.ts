import { Feature, Point, LineString } from '@turf/helpers'

// SharedStreets - GeoJSON
export type SharedStreetsIntersection = Feature<Point, SharedStreetsIntersectionProperties>
export type SharedStreetsLocationReference = Feature<Point, SharedStreetsLocationReferenceProperties>
export type SharedStreetsGeometry = Feature<LineString, SharedStreetsGeometryProperties>

// SharedStreets - JSON
export interface SharedStreetsReference {
  id: string,
  formOfWay: SharedStreetsFormOfWay,
  geometryId: string,
  locationReferences: string[],
}

// SharedStreets - GeoJSON Properties
export interface SharedStreetsIntersectionProperties {
  id: string,
  osmNodeId?: number,
  inboundReferenceIds?: string[],
  outboundReferenceIds?: string[],
}
export interface SharedStreetsGeometryProperties {
  id: string,
  fromIntersectionId?: string,
  toIntersectionId?: string,
  forwardReferenceId?: string,
  backReferenceId?: string,
  roadClass?: SharedStreetsRoadClass,
}
export interface SharedStreetsLocationReferenceProperties extends SharedStreetsIntersectionProperties {
  id: string,
  outboundBearing?: number,
  inboundBearing?: number,
  distanceToNextRef?: number,
}

// SharedStreets - Helpers
export type SharedStreetsRoadClass =
  'Motorway' |
  'Trunk' |
  'Primary' |
  'Secondary' |
  'Tertiary' |
  'Residential' |
  'Unclassified' |
  'Service' |
  'Other'

export type SharedStreetsFormOfWay =
  'Undefined' |
  'Motorway' |
  'MultipleCarriageway' |
  'SingleCarriageway' |
  'Roundabout' |
  'TrafficSquare' |
  'SlipRoad' |
  'Other'
