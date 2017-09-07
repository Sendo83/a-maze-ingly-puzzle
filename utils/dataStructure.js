'use strict'

const fs = require('fs')

const roomsMap = []
const adjacencyMap = []
const objectsMap = []

const readData = function(filePath){
  return fs.readFileSync(filePath)
}

const parseJson = function(data) {
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

const computeRoomsMap = function(room){
  roomsMap[room.id] = room
  return roomsMap
}

const computeAdjacencyMap = function(room){
    adjacencyMap[room.id]	= computeRoomNeighbors(room)
    return adjacencyMap
}

const computeRoomNeighbors = function(room){
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

const computeObjectsMap = function(room){
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
  readData : readData,
  parseJson : parseJson,
  computeRoomsMap : computeRoomsMap,
  computeAdjacencyMap : computeAdjacencyMap,
  computeRoomNeighbors : computeRoomNeighbors,
  computeObjectsMap : computeObjectsMap,
  computeDataStructures : computeDataStructures,
  getObjectsRooms : getObjectsRooms,
  getAdjacencyMap : getAdjacencyMap,
  getRoomsMap : getRoomsMap,
  getObjectsMap : getObjectsMap
}
