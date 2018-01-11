import { point } from '@turf/helpers'
import {
  SharedStreetsIntersection as Intersection,
  SharedStreetsLocationReference as LocationReference,
  SharedStreetsIntersectionProperties as IntersectionProps
} from './'

const id = 'ABC'
const properties: IntersectionProps = {
  id,
  osmNodeId: 123,
  inboundReferenceIds: ['DEF'],
  outboundReferenceIds: ['GHI']
}
const pt: Intersection = point([10, 10], properties, {id})
const loc: LocationReference = point([10, 10], properties, {id})
