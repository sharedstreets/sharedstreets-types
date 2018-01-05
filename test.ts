import { point } from '@turf/helpers'
import {
  SharedStreetsIntersection as Intersection,
  SharedStreetsIntersectionProperties as Props
} from './'

const id = 'ABC'
const properties: Props = {
  id,
  osmNodeId: 123,
  inboundReferenceIds: ['DEF'],
  outboundReferenceIds: ['GHI']
}
const pt: Intersection = point([10, 10], properties, {id})
