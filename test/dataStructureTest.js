"use strict";

const assert = require("assert");
const ds = require("../utils/dataStructure");

let testMap =
  '{"rooms": [{ "id": 1, "name": "Hallway", "north": 2, "objects": [] }, { "id": 2, "name": "Dining Room", "south": 1, "west": 3, "east": 4, "objects": [] }, { "id": 3, "name": "Kitchen","east":2, "objects": [ { "name": "Knife" } ] }, { "id": 4, "name": "Sun Room","west":2, "objects": [ { "name": "Potted Plant" } ] }]}';

let map = ds.parseJson(testMap);

describe("Data Structures", function() {
  describe("#computeDataStructures", function() {
    ds.computeDataStructures(map);

    describe("#getRoomsMap()", function() {
      it("Maze should have 4 rooms", function() {
        let roomsMap = ds.getRoomsMap();
        assert.equal(4, roomsMap.length - 1);
      });
    });

    describe("#computeObjectsMap()", function() {
      it("Knife should be inside Room with id=3 and Potted Plant should be inside Room with id=4", function() {
        let objectsMap = ds.getObjectsMap();
        assert.equal(3, objectsMap["Knife"]);
        assert.equal(4, objectsMap["Potted Plant"]);
      });
    });

    describe("#getAdjacencyMap()", function() {
      it("Room with id=1 should be connected with Room with id=2", function() {
        let adjacencyMap = ds.getAdjacencyMap();
        assert.equal(1, adjacencyMap[1][2]);
      });
      it("Room with id=2 should be connected with Room with id=1, Room with id=3 and Room with id=4", function() {
        let adjacencyMap = ds.getAdjacencyMap();
        assert.equal(1, adjacencyMap[2][1]);
        assert.equal(1, adjacencyMap[2][3]);
        assert.equal(1, adjacencyMap[2][4]);
      });
    });

    describe("#getObjectsRooms()", function() {
      it("Knife should be inside Room with id=3 and Potted Plant should be inside Room with id=4", function() {
        let objectRooms = ds.getObjectsRooms(["Knife", "Potted Plant"]);
        assert.equal(3, objectRooms[0]);
        assert.equal(4, objectRooms[1]);
      });
    });
  });
});
