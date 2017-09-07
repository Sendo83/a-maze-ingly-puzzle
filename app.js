reader'use strict'

const reader = require('./utils/inputReader')
const ds = require('./utils/dataStructure')
const routePlanner = require('./route/routePlanner')
const printer = require('./utils/print')

/*
Indici in cui si trovano i parametri passati da console
dopo la normalizzazione di argv
*/
const FILE_PATH_INDEX = 0
const TO_COLLECT_INDEX = 2
const START_ROOM_INDEX = 1
const ERR_EXIT_CODE = 1

const args = reader.read()
const filePath = args[FILE_PATH_INDEX]
const objectsToCollect = args.slice(TO_COLLECT_INDEX)
const startRoom = Number(args[START_ROOM_INDEX])

ds.computeDataStructures(filePath)
const targetRooms = ds.getObjectsRooms(objectsToCollect)
const objectsMap = ds.getObjectsMap()

validateObjectsToCollet(objectsToCollect)

const adjacencyMap = ds.getAdjacencyMap()
const route = routePlanner.getRoute(adjacencyMap, startRoom, targetRooms)

isRouteEmpty(route)

const roomsMap = ds.getRoomsMap()
printer.printResult(route,roomsMap,objectsToCollect)


function validateObjectsToCollet(objectsToCollect){
  objectsToCollect.forEach(object =>{
    validateObject(object)
  })
}

function validateObject(object){
  if(!objectsMap[object]) {
    process.stderr.write("\nError | Impossibile trovare un percorso\n")
    process.exit(ERR_EXIT_CODE)
  }
}

function isRouteEmpty(route){
  if (!route){
    process.stderr.write("\nError | Impossibile trovare un percorso\n")
    process.exit(ERR_EXIT_CODE)
  }
}
