"use strict";

const assert = require("assert");
const ds = require("../utils/dataStructure");
const rp = require("../route/routePlanner");

let testMap =
  '{"rooms": [{ "id": 1, "name": "Hallway", "north": 2, "objects": [] }, { "id": 2, "name": "Dining Room", "south": 1, "west": 3, "east": 4, "objects": [] }, { "id": 3, "name": "Kitchen","east":2, "objects": [ { "name": "Knife" } ] }, { "id": 4, "name": "Sun Room","west":2, "objects": [ { "name": "Potted Plant" } ] }]}';

let map = ds.parseJson(testMap);

describe("Route Planner", function() {
  describe("#getRoute()", function() {
    it("Given the test map, start Room with id=2, and objects to collect Knife and Potted Plant the route to follow should be: Room id=2, Room id=4, Room id=2, Room id=3", function() {
      ds.computeDataStructures(map);
      let targetRooms = ds.getObjectsRooms(["Knife", "Potted Plant"]);
      let objectsMap = ds.getObjectsMap();
      let adjacencyMap = ds.getAdjacencyMap();
      assert.deepEqual([2, 4, 2, 3], rp.getRoute(adjacencyMap, 2, [3, 4]));
    });
  });
});
