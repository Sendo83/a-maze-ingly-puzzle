"use strict";

const assert = require("assert");
const algorithm = require("../algorithm/bfs");

const graph = [
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0]
];

describe("Algorithm", function() {
  describe("#bfs()", function() {
    it("Given the graph, path beteween node 1 and node 4 should be [1,2,3,5]", function() {
      assert.deepStrictEqual([1, 2, 3, 5], algorithm.bfs(graph, 1, 5));
    });
  });

  describe("#computePath()", function() {
    it("Given the parents sets and target node equal to 4 the path should be [2,1,4] ", function() {
      let parents = [ 1, 2, null, 2, 1, 3 ];
      let targetNode = 4;
      assert.deepStrictEqual([2, 1, 4], algorithm.computePath(parents, targetNode));
    });
  });
});
