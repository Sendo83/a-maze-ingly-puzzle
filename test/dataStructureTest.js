const assert = require('assert')
const testFile = require('./createTestFile')
const ds = require('../utils/dataStructure')

describe('dataStructure', function() {
  let data = testFile.createTestMapFile();
  describe('#createDataStructure', function() {
    it('should return 0 when the data stractures are successfully computed', function() {
      ds.computeDataStructures('./map.json')
      assert.notEqual(null, ds.getObjectsRooms());
    });
  });
});
