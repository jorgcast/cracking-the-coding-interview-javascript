class Queue {
  // We can use a Linked List instead of an array.
  constructor() {
    this.list = [];
  }

  enqueue(value) {
    this.list.push(value);
  }

  dequeue() {
    return this.list.shift();
  }

  peek() {
    return this.isEmpty() ? null : this.list[0];
  }

  isEmpty() {
    return this.list.length === 0;
  }
}

export default Queue;
