'use strict'

const algorithm = require('../algorithm/bfs')

function getRoute(adjacencyMap, start, target) {
  let route = [start]

  while(target.length){
    let targetNode = target.pop()
    let path = algorithm.bfs(adjacencyMap, start, targetNode)

    if (!path) {
      return path
    }
    // Elimino il primo elemento del path visto che è già presente nella route
    path.shift()
    route = route.concat(path)
    start = targetNode
  }

  return route
}

module.exports.getRoute = getRoute
