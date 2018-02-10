# TypeScript definitions for [SharedStreets.js](https://sharedstreets.io/)

[![npm version](https://badge.fury.io/js/sharedstreets-types.svg)](https://badge.fury.io/js/sharedstreets-types)
[![Build Status](https://travis-ci.org/sharedstreets/sharedstreets-types.svg?branch=master)](https://travis-ci.org/sharedstreets/sharedstreets-types)

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
