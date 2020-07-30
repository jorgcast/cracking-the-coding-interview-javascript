import assert from 'assert';

import checkRoute from '../../src/chapter04/question_4.1.js';
import Graph from '../../utils/Graph.js';

const graph = new Graph();
graph.addNode('A').addNode('B').addNode('C').addNode('D').addNode('E');
graph.addEdge('A', 'B').addEdge('B', 'C').addEdge('C', 'A').addEdge('D', 'E').addEdge('E', 'D');

describe('#Question 4.1 - Route Between Nodes', function () {
  it('should return true for nodes A - B', function () {
    assert.ok(checkRoute('A', 'B', graph));
  });

  it('should return true for nodes B - C', function () {
    assert.ok(checkRoute('B', 'C', graph));
  });

  it('should return false for nodes C - D', function () {
    assert.equal(checkRoute('C', 'D', graph), false);
  });

  it('should return true for nodes D - E', function () {
    assert.equal(checkRoute('D', 'E', graph), true);
  });

  it('should return false for nodes E - A', function () {
    assert.equal(checkRoute('E', 'A', graph), false);
  });
});
