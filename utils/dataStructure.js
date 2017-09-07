'use strict'

const fs = require('fs')

const roomsMap = []
const adjacencyMap = []
const objectsMap = []

function readData(filePath){
  return fs.readFileSync(filePath)
}

function parseJson(data) {
  return JSON.parse(data)
}

const computeDataStructures = function(filePath){
  let data = readData(filePath)
  let map = parseJson(data)
  map.rooms.forEach(currentRoom  => {
    computeRoomsMap(currentRoom)
    computeAdjacencyMap(currentRoom)
    computeObjectsMap(currentRoom)
  })

  return
}

function computeRoomsMap(room){
  roomsMap[room.id] = room
  return roomsMap
}

function computeAdjacencyMap(room){
    adjacencyMap[room.id]	= computeRoomNeighbors(room)
    return adjacencyMap
}

function computeRoomNeighbors(room){
  let neighbors= []

	if (room.north) {
    neighbors[room.north] = 1
	}
	if (room.south) {
    neighbors[room.south] = 1
	}
	if (room.west) {
    neighbors[room.west] = 1
	}
	if (room.east) {
    neighbors[room.east] = 1
	}

	return neighbors
}

function computeObjectsMap(room){
  if (room.objects.length){
    room.objects.forEach(object  => {
      objectsMap[object.name] = room.id
    })
  }

  return objectsMap
}

const getAdjacencyMap = () => adjacencyMap

const getObjectsMap = () => objectsMap

const getRoomsMap = () => roomsMap

const getObjectsRooms = function(objects) {
	let nodes = []
  objects.forEach(currentObject  => {
    if (objectsMap[currentObject] && !nodes.includes(objectsMap[currentObject])){
        nodes.push(objectsMap[currentObject])
      }
    })

	return nodes
}

/*
* Export dei moduli
*/
module.exports = {
  computeDataStructures : computeDataStructures,
  getObjectsRooms : getObjectsRooms,
  getAdjacencyMap : getAdjacencyMap,
  getRoomsMap : getRoomsMap,
  getObjectsMap : getObjectsMap
}
