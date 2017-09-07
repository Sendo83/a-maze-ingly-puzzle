"use strict";

const bfs = function(graph, startNode, targetNode) {
  let parents = [];
  let queue = [];
  let visited = [];
  let current;

  queue.push(startNode);
  parents[startNode] = null;
  visited[startNode] = true;

  while (queue.length) {
    current = queue.shift();

    if (current === targetNode) {
      let path = computePath(parents, targetNode);
      return path;
    }

    for (let i = 0; i < graph.length; i++) {
      if (i !== current && graph[current][i] && !visited[i]) {
        parents[i] = current;
        visited[i] = true;
        queue.push(i);
      }
    }
  }

  return null;
};

const computePath = function(parents, targetNode) {
  console.log(parents);
  console.log(targetNode);
  let result = [targetNode];

  while (parents[targetNode] !== null) {
    targetNode = parents[targetNode];
    result.push(targetNode);
  }
  console.log(result.reverse);
  return result.reverse();
};

module.exports = {
  bfs: bfs,
  computePath: computePath
};
