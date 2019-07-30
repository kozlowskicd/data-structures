const LinkedList = require('../linked-list/singly-linked-list.js');

class HashTable {
  constructor() {
    this.data = new Array(100);
  }

  hash(key) {
    let code = 0;
    for (let i = 0; i < key.length; i += 1) {
      code += key.charCodeAt(i) * 97;
    }
    return code % this.data.length;
  }

  add(key, value) {
    const index = this.hash(key);
    if (this.data[index] === undefined) {
      const list = new LinkedList();
      list.append({ [key]: value });
      this.data[index] = list;
    } else {
      this.data[index].append({ [key]: value });
    }
  }

  get(key) {
    const index = this.hash(key);
    if (this.data[index] && this.data[index].head) {
      let currentNode = this.data[index].head;
      while (currentNode) {
        if (currentNode.data[key]) {
          return currentNode.data[key];
        }
        currentNode = currentNode.next;
      }
      return null;
    }

    return null;
  }

  contains(key) {
    const index = this.hash(key);
    if (this.data[index] && this.data[index].head) {
      let currentNode = this.data[index].head;
      while (currentNode) {
        if (currentNode.data[key]) {
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
    }

    return false;
  }
}

module.exports = HashTable;
