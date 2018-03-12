# Changelog

## 2018-03-12 (1.3.0)

- Include OSM `name` field (https://github.com/sharedstreets/sharedstreets-ref-system/pull/18)

## 2018-02-21 (1.2.4)

- Revert `nodeId` to `number`

## 2018-02-12 (1.2.3)

- Update `nodeId` to `string`

## 2018-02-10 (1.2.0)

- Remove optional interface objects to `SharedStreetReference` & `SharedStreetsGeometry`
- Allow `enum` to work in CommonJS
- Replaced `index.d.ts` with `index.ts`
- Enforce strict Typescript & TSLint config

## 2018-02-08 (1.1.3)

- Drop enums for `FormOfWay` & `RoadClass`

## 2018-02-02 (1.1.2)

- Change `geometryID` => `geometryId`

## 2018-01-29 (1.0.0)

- Refactor types to reflect pure `.proto` format

## 2018-01-28 (0.5.0)

- Update Sharedstreets `.proto`
- Update tests

## 2018-01-28 (0.4.0)

- Update browserify build

## 2018-01-28 (v1.1.0)

- Update SharedStreets `.proto`
  - latlons => lonlats