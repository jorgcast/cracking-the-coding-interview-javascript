import Queue from './Queue';

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  printLevelOrder() {
    var level = [];
    var q = new Queue();
    var nextq = new Queue();
    var currNode;

    q.enqueue(this);

    while (!q.isEmpty()) {
      currNode = q.dequeue();
      level.push(currNode.value);

      if (currNode.left !== null) {
        nextq.enqueue(currNode.left);
      }

      if (currNode.right !== null) {
        nextq.enqueue(currNode.right);
      }

      if (q.isEmpty()) {
        level.push('|');
        // Use below lines instead of the line before to console.log every level of the BST
        // console.log(level.join(','));
        // level = [];
        q = nextq;
        nextq = new Queue();
      }
    }

    return level.join(' ');
  }
};

export default BST;
