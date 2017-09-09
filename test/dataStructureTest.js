"use strict";

const assert = require("assert");
const ds = require("../utils/dataStructure");

const testMap =
  '{"rooms": [{ "id": 1, "name": "Hallway", "north": 2, "objects": [] }, { "id": 2, "name": "Dining Room", "south": 1, "west": 3, "east": 4, "objects": [] }, { "id": 3, "name": "Kitchen","east":2, "objects": [ { "name": "Knife" } ] }, { "id": 4, "name": "Sun Room","west":2, "objects": [ { "name": "Potted Plant" } ] }]}';

const map = ds.parseJson(testMap);

describe("Data Structures", function() {
  describe("#computeDataStructures", function() {
    ds.computeDataStructures(map);
    describe("#getRoomsMap()", function() {
      it("Computed roomsMap should be consistent with testMap", function() {
        let roomsMap = ds.getRoomsMap();
        map.rooms.forEach(room => {
          assert.deepEqual(roomsMap[room.id], room);
        });
      });
    });

    describe("#computeObjectsMap()", function() {
      let objectsMap = ds.getObjectsMap();
      it("Computed objectsMap should be consistent with test maze map", function() {
        map.rooms.forEach(room => {
          let objectInRoom = room.objects;
          if (objectInRoom && objectInRoom.length > 0) {
            assert.equal(room.id, objectsMap[room.objects[0].name]);
          }
        });
      });
      it("Knife should be inside Room with id=3 and Potted Plant should be inside Room with id=4", function() {
        assert.equal(3, objectsMap["Knife"]);
        assert.equal(4, objectsMap["Potted Plant"]);
      });
    });

    describe("#getAdjacencyMap()", function() {
      let adjacencyMap = ds.getAdjacencyMap();
      it("Room with id=1 should be connected with Room with id=2", function() {
        assert.equal(1, adjacencyMap[1][2]);
      });
      it("Room with id=2 should be connected with Room with id=1, Room with id=3 and Room with id=4", function() {
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
