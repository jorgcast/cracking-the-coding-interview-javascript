class Graph {
  constructor() {
    this.nodes = {};
  }

  addEdge(node, edge) {
    if (this.hasNode(node) && !this.hasEdge(edge)) {
      this.nodes[node][edge] = true;
    }

    // Return this to chain addX methods.
    return this;
  }

  addNode(value) {
    if (!this.hasNode(value)) {
      this.nodes[value] = {};
    }

    // Return this to chain addX methods.
    return this;
  }

  findEdges(node) {
    return this.nodes[node];
  }

  hasEdge(node, edge) {
    if (this.hasNode(node)) {
      return this.nodes[node][edge] !== undefined;
    }

    return false;
  }

  hasNode(node) {
    return this.nodes[node] !== undefined;
  }

  removeEdge(node, edge) {
    if (this.hasNode(node)) {
      delete this.nodes[node][edge];
    }
  }

  removeNode(node) {
    if (this.hasNode(node)) {
      delete this.nodes[node];

      for (let currNode in this.nodes) {
        if (this.nodes[currNode][node]) {
          delete this.nodes[currNode][node];
        }
      }
    }
  }

  toString() {
    console.log(JSON.stringify(this.nodes));
    return JSON.stringify(this.nodes);
  }
};

export default Graph;
