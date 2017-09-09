"use strict";

const assert = require("assert");
const validate = require("../utils/validator");

const startRoom = 2;
const toCollect = ["Knife", "Potted Plant"];
const object = "Knife";
const objectsMap = { Knife: 3, "Potted Plant": 4 };
const roomsMap = [
  {},
  { id: 1, name: "Hallway", north: 2, objects: [] },
  { id: 2, name: "Dining Room", south: 1, west: 3, east: 4, objects: [] },
  { id: 3, name: "Kitchen", east: 2, objects: [{ name: "Knife" }] },
  { id: 4, name: "Sun Room", west: 2, objects: [{ name: "Knife" }] }
];

describe("Validator", function() {
  describe("#startRoom()", function() {
    it("should execute without error if start room is inside the map", function() {
      validate.startRoom(startRoom, roomsMap);
      assert.equal(null, process.exitCode);
    });
  });

  describe("#objectsToCollect()", function() {
    it("should execute without error if test objects to collect are inside the map", function() {
      validate.objectsToCollect(toCollect, objectsMap);
      assert.equal(null, process.exitCode);
    });
  });

  describe("#isObjectValid()", function() {
    it("should execute without error it test objct is inside map", function() {
      validate.isObjectValid(object, objectsMap);
      assert.equal(null, process.exitCode);
    });
  });

  describe("#isStartRoomNumber()", function() {
    it("should execute without error if start room is a number", function() {
      validate.isStartRoomNumber(startRoom);
      assert.equal(null, process.exitCode);
    });
  });

  describe("#inputLength()", function() {
    it("should execute without error if provide at least two input arguments for the script", function() {
      validate.inputLength("map", startRoom);
      assert.equal(null, process.exitCode);
    });
  });
});
