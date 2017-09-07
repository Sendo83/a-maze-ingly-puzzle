"use strict";

const algorithm = require("../algorithm/bfs");

/**
 * Compute the path from the start room to the target
 * @param {array} adjacencyMap matrix representing the adjaceny map
 * @param {number} start start room, provided through the input
 * @param {array} target array containing the target rooms where the collecatble objects are contained
 * @returns {array} route a valid path, if exists, from the start room to the last target room
 */
function getRoute(adjacencyMap, start, target) {
  let route = [start];

  while (target.length) {
    let targetNode = target.pop();
    let path = algorithm.bfs(adjacencyMap, start, targetNode);

    if (!path) {
      return path;
    }
    // Elimino il primo elemento del path visto che è già presente nella route
    path.shift();
    route = route.concat(path);
    start = targetNode;
  }

  return route;
}

module.exports.getRoute = getRoute;
