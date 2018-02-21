import test from "tape";
import { RoadClass, SharedStreetsIntersection } from "./";

// Intersection
const intersection: SharedStreetsIntersection = {
  id: "ABC",
  inboundReferenceIds: ["DEF"],
  lat: 45,
  lon: 110,
  nodeId: 123,
  outboundReferenceIds: ["GHI"],
};

test("sharedstreets-types", (t) => {
  t.equal(RoadClass.Motorway, 0);
  t.equal(RoadClass.Trunk, 1);
  t.end();
});
