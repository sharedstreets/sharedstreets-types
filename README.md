# TypeScript definitions for [SharedStreets.js](https://sharedstreets.io/)

## Installation

```
npm install --save sharedstreets-types
```

## Example

```ts
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
```

## Summary

This package contains type definitions for sharedstreets (https://sharedstreets.io/).

## Credits

These definitions were written by Denis Carriere https://github.com/DenisCarriere.