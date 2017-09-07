'use strict'

const bfs = function (graph, startNode, targetNode) {
  let parents = []
  let queue = []
  let visited = []
  let current

  queue.push(startNode)
  parents[startNode] = null
  visited[startNode] = true

  while (queue.length) {
    current = queue.shift()

    if (current === targetNode) {
      let path = buildPath(parents, targetNode)
      return path
    }

    for (let i = 0; i < graph.length; i++) {
      if (i !== current && graph[current][i] && !visited[i]) {
        parents[i] = current
        visited[i] = true
        queue.push(i)
      }
    }

  }

  return null
}

function buildPath(parents, targetNode) {
  let result = [targetNode]

  while (parents[targetNode] !== null) {
    targetNode = parents[targetNode]
    result.push(targetNode)
  }

  return result.reverse()
}

module.exports.bfs = bfs
