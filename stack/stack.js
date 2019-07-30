'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if(!this.top) {
      this.top = node
      this.length++;
    }
    else {
      node.next = this.top;
      this.top = node;
      this.length++
    }
  }

  peek() {
    let result = this.top && this.top.value;
    return result;
  }

  pop() {
    let result = this.top && this.top.value;
    this.top = this.top && this.top.next;
    return result;
  }
}

module.exports = Stack;