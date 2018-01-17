import { SharedStreetsIntersection, RoadClass } from './'

// Intersection
const intersection: SharedStreetsIntersection = {
  id: 'ABC',
  nodeId: 123,
  inboundReferenceIds: ['DEF'],
  outboundReferenceIds: ['GHI']
}

// RoadClass
RoadClass.Motorway // => 0
RoadClass.Trunk // => 1