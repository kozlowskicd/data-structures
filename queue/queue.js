class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.front === null) {
      this.front = node;
      this.rear = node;
      this.length += 1;
    } else {
      node.next = this.rear;
      this.rear = node;
      this.length += 1;
    }
  }

  dequeue() {
    let currentNode = this.rear;
    if (currentNode === this.front) {
      this.front = null;
      this.rear = null;
      this.length -= 1;
      return currentNode && currentNode.value ? currentNode.value : null;
    }
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    const result = currentNode.next.value;
    currentNode.next = null;
    this.front = currentNode;
    this.length -= 1;
    return result;
  }

  peek() {
    return this.front ? this.front.value : null;
  }
}

module.exports = Queue;
