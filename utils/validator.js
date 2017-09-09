"use strict";

const ERR_EXIT_CODE = 1;

/**
 * Checks if the provided start room is contained inside the maze
 *
 * @param {number} startRoom id provided as input
 * @param {array} roomsMap id provided as input
 */
function startRoom(startRoom, roomsMap) {
  if (!roomsMap[startRoom]) {
    process.stderr.write("\nErrore | Stanza di partenza non valida\n");
    process.exitCode = ERR_EXIT_CODE;
    process.exit(ERR_EXIT_CODE);
  }
}

/**
 * Checks if the provided objects to collcet are contained inside the maze
 *
 * @param {array} toCollect objects to be collected
 * @param {array} objectsMap objects contained inside the maze
 */
function objectsToCollect(toCollect, objectsMap) {
  toCollect.forEach(object => {
    isObjectValid(object, objectsMap);
  });
}

/**
 * Checks if the provided object is inside the maze
 * if it's not exit by returning a proper error code
 *
 * @param {string} object is the object name
 */
function isObjectValid(object, objectsMap) {
  if (!objectsMap[object]) {
    process.stderr.write("\nErrore | Impossibile trovare un percorso\n");
    process.exitCode = ERR_EXIT_CODE;
    process.exit(ERR_EXIT_CODE);
  }
}

module.exports = {
  isObjectValid: isObjectValid,
  objectsToCollect: objectsToCollect,
  startRoom: startRoom
};
