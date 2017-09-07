"use strict";

const fs = require("fs");

const roomsMap = [];
const adjacencyMap = [];
const objectsMap = [];

/**
 * Read the file provided as input via console
 * @param {string} filePath 
 */
function readData(filePath) {
  return fs.readFileSync(filePath);
};

/**
 * Pars
 * @param {string} data 
 */
function parseJson(data) {
  return JSON.parse(data);
};

/**
 * 
 * @param {object} map 
 */
function computeDataStructures(map) {
  map.rooms.forEach(currentRoom => {
    computeRoomsMap(currentRoom);
    computeAdjacencyMap(currentRoom);
    computeObjectsMap(currentRoom);
  });

  return;
};

/**
 * 
 * @param {object} room 
 */
function computeRoomsMap(room) {
  roomsMap[room.id] = room;
  return roomsMap;
};

/**
 * 
 * @param {object} room 
 */
function computeAdjacencyMap(room) {
  adjacencyMap[room.id] = computeRoomNeighbors(room);
  return adjacencyMap;
};

/**
 * 
 * @param {object} room 
 */
function computeRoomNeighbors(room) {
  let neighbors = [];

  if (room.north) {
    neighbors[room.north] = 1;
  }
  if (room.south) {
    neighbors[room.south] = 1;
  }
  if (room.west) {
    neighbors[room.west] = 1;
  }
  if (room.east) {
    neighbors[room.east] = 1;
  }

  return neighbors;
};

/**
 * 
 * @param {object} room 
 */
function computeObjectsMap(room) {
  if (room.objects.length) {
    room.objects.forEach(object => {
      objectsMap[object.name] = room.id;
    });
  }

  return objectsMap;
};

/**
 * 
 * @param {array} objects 
 */
function getObjectsRooms(objects) {
  let nodes = [];
  objects.forEach(currentObject => {
    if (
      objectsMap[currentObject] &&
      !nodes.includes(objectsMap[currentObject])
    ) {
      nodes.push(objectsMap[currentObject]);
    }
  });

  return nodes;
};

const getAdjacencyMap = () => adjacencyMap;

const getObjectsMap = () => objectsMap;

const getRoomsMap = () => roomsMap;

module.exports = {
  readData: readData,
  parseJson: parseJson,
  computeRoomsMap: computeRoomsMap,
  computeAdjacencyMap: computeAdjacencyMap,
  computeRoomNeighbors: computeRoomNeighbors,
  computeObjectsMap: computeObjectsMap,
  computeDataStructures: computeDataStructures,
  getObjectsRooms: getObjectsRooms,
  getAdjacencyMap: getAdjacencyMap,
  getRoomsMap: getRoomsMap,
  getObjectsMap: getObjectsMap
};
