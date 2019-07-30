const Node = require('./node.js');

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }

  add(value) {
    const next = (root) => {
      const node = root;
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
        } else { next(node.left); }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = new Node(value);
        } else { next(node.right); }
      }
    };
    next(this.root);
  }

  contains(value) {
    let result = false;
    const next = (node) => {
      if (node === null) {
        return;
      }
      if (node.value === value) {
        result = true;
      }
      next(node.left);
      next(node.right);
    };
    next(this.root);
    return result;
  }
}

module.exports = BinarySearchTree;
