import { point } from '@turf/helpers'
import {
  SharedStreetsIntersection,
  SharedStreetsLocationReference,
} from './'

const id = 'ABC'

// Intersection
const pt: SharedStreetsIntersection = point([10, 10], {
  id,
  osmNodeId: 123,
  inboundReferenceIds: ['DEF'],
  outboundReferenceIds: ['GHI']
}, {id})

// Location Reference
const loc: SharedStreetsLocationReference = point([10, 10], {intersectionId: id})
