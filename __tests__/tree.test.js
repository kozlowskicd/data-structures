const BinaryTree = require('../tree/tree.js');
const BinarySearchTree = require('../tree/binary-search-tree.js');
const Node = require('../tree/node.js');

const createTree = () => {
  const b = new BinaryTree(1);
  b.root.left = new Node(2);
  b.root.right = new Node(3);
  b.root.left.left = new Node(4);
  b.root.left.right = new Node(5);
  b.root.right.left = new Node(6);
  b.root.right.right = new Node(7);
  return b;
};

describe('Binary Tree', () => {
  it('can create instances of a Binary Tree', () => {
    const b = new BinaryTree();
    expect(b).toBeInstanceOf(BinaryTree);
  });

  it('holds a node in the root', () => {
    const b = new BinaryTree(1);
    expect(b.root).toBeDefined();
    expect(b.root.value).toEqual(1);
  });

  it('has variables for left and right nodes', () => {
    const b = new BinaryTree(1);
    b.root.left = new Node(5);
    b.root.right = new Node(9);
    expect(b.root.left.value).toEqual(5);
    expect(b.root.right.value).toEqual(9);
  });

  it('can preOrder a tree', () => {
    const b = createTree();
    const preOrder = b.preOrder();
    expect(preOrder).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });

  it('can inOrder a tree', () => {
    const b = createTree();
    const inOrder = b.inOrder();
    expect(inOrder).toEqual([4, 2, 5, 1, 6, 3, 7]);
  });

  it('can postOrder a tree', () => {
    const b = createTree();
    const postOrder = b.postOrder();
    expect(postOrder).toEqual([4, 5, 2, 6, 7, 3, 1]);
  });
});

describe('Binary Search Tree', () => {
  it('can create instances of a Binary Search Tree', () => {
    const b = new BinarySearchTree();
    expect(b).toBeInstanceOf(BinarySearchTree);
  });

  it('holds a node in the root', () => {
    const b = new BinarySearchTree(1);
    expect(b.root).toBeDefined();
    expect(b.root.value).toEqual(1);
  });

  it('has variables for left and right nodes', () => {
    const b = new BinarySearchTree(1);
    b.root.left = new Node(5);
    b.root.right = new Node(9);
    expect(b.root.left.value).toEqual(5);
    expect(b.root.right.value).toEqual(9);
  });

  it('has an add method', () => {
    const b = new BinarySearchTree(1);
    expect(typeof b.add).toBe('function');
  });

  it('can add an item to a tree', () => {
    const b = new BinarySearchTree(10);
    expect(b.root.left).toBeNull();
    b.add(2);
    expect(b.root.left).not.toBeNull();
    expect(b.root.left.value).toEqual(2);
  });

  it('adds smaller items to the left, larger items to the right', () => {
    const b = new BinarySearchTree(10);
    b.add(5);
    expect(b.root.left.value).toEqual(5);
    b.add(20);
    expect(b.root.right.value).toEqual(20);
    b.add(15);
    expect(b.root.right.left.value).toEqual(15);
  });

  it('has a contains method', () => {
    const b = new BinarySearchTree(1);
    expect(typeof b.contains).toBe('function');
  });

  it('returns a boolean', () => {
    const b = new BinarySearchTree(1);
    const result = b.contains(5);
    expect(result).toBe(false);
  });

  it('returns true if a value is found in the tree', () => {
    const b = new BinarySearchTree(10);
    b.add(5);
    b.add(2);
    b.add(4);
    const result = b.contains(4);
    expect(result).toBe(true);
  });
});
