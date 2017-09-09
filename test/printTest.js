"use strict";

const assert = require("assert");
const ds = require("../utils/dataStructure");
const rp = require("../route/routePlanner");

const testMap =
  '{"rooms": [{ "id": 1, "name": "Hallway", "north": 2, "objects": [] }, { "id": 2, "name": "Dining Room", "south": 1, "west": 3, "east": 4, "objects": [] }, { "id": 3, "name": "Kitchen","east":2, "objects": [ { "name": "Knife" } ] }, { "id": 4, "name": "Sun Room","west":2, "objects": [ { "name": "Potted Plant" } ] }]}';

const map = ds.parseJson(testMap);
const start = 2;
const toCollect = ["Knife", "PottedPlant"];
ds.computeDataStructures();
const adjacencyMap = ds.getAdjacencyMap();
const objectsMap = ds.getRoomsMap();
const roomsMap = ds.getRoomsMap();

console.log
