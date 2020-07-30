import Queue from "../../utils/Queue";
import Graph from "../../utils/Graph";

/**
 * @param {string} nodeA
 * @param {string} nodeB
 * @param {Graph} graph
 * @return {boolean}
 */
const checkRoute = (nodeA, nodeB, graph) => {
  // Init Queues
  const qA = new Queue();
  const qB = new Queue();
  qA.enqueue(nodeA);
  qB.enqueue(nodeB);

  // Init visited nodes
  const visited1 = {};
  const visited2 = {};
  visited1[nodeA] = true;
  visited2[nodeB] = true;

  while (!qA.isEmpty() || !qB.isEmpty()) {
    // Check qA
    if (!qA.isEmpty()) {
      const node = qA.dequeue();

      if (node === nodeB) return true;

      for (let n in graph.findEdges(node)) {
        if (!visited1[n]) {
          visited1[n] = true;
          qA.enqueue(n);
        }
      }
    }

    // Check qB
    if (!qB.isEmpty()) {
      const node = qB.dequeue();

      if (node === nodeA) return true;

      for (let n in graph.findEdges(node)) {
        if (!visited2[n]) {
          visited2[n] = true;
          qB.enqueue(n);
        }
      }
    }
  }

  return false;
};

export default checkRoute;
