const Node = require('./node.js');

class BinaryTree {
  constructor(root) {
    this.root = new Node(root);
  }

  preOrder() {
    const result = [];

    const next = (node, array) => {
      if (node === null) {
        return;
      }
      array.push(node.value);
      next(node.left, result);
      next(node.right, result);
    };

    next(this.root, result);
    return result;
  }

  inOrder() {
    const result = [];

    const next = (node, array) => {
      if (node === null) {
        return;
      }
      next(node.left, result);
      array.push(node.value);
      next(node.right, result);
    };

    next(this.root, result);
    return result;
  }

  postOrder() {
    const result = [];

    const next = (node, array) => {
      if (node === null) {
        return;
      }
      next(node.left, result);
      next(node.right, result);
      array.push(node.value);
    };

    next(this.root, result);
    return result;
  }
}

module.exports = BinaryTree;
