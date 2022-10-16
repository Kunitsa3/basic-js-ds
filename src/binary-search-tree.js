// const {
//   NotImplementedError
// } = require('../extensions/index.js');

const {
  Node
} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const addValue = (node, value) => {
      if (!node) {
        return new Node(value);
      }

      if (value === node.data) {
        return node;
      }

      if (value < node.data) {
        node.left = addValue(node.left, value)
      } else {
        node.right = addValue(node.right, value)
      }
      return node;
    }
    this.treeRoot = addValue(this.treeRoot, data);
  }

  has(data) {
    const findValue = (node, value) => {
      if (!node) {
        return false;
      }

      if (value === node.data) {
        return true;
      }

      return value < node.data ?
        findValue(node.left, value) :
        findValue(node.right, value)
    }

    return findValue(this.treeRoot, data);
  }

  find(data) {
    const returnValue = (node, value) => {
      if (!node) {
        return null;
      }

      if (value === node.data) {
        return node;
      }

      return value < node.data ?
        returnValue(node.left, value) :
        returnValue(node.right, value)
    }

    return returnValue(this.treeRoot, data);
  }

  remove(data) {
    const deleteValue = (node, value) => {
      if (!node) {
        return null
      }

      if (value < node.data) {
        node.left = deleteValue(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = deleteValue(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null
        }
      }

      if (!node.left) {
        node = node.right
        return node;
      }

      if (!node.right) {
        node = node.left
        return node;
      }

      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left
      }
      node.data = minFromRight.data;

      node.right = deleteValue(node.right, minFromRight.data);

      return node;
    }

    return deleteValue(this.treeRoot, data);
  }

  min() {
    if (!this.treeRoot) {
      return;
    }

    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.treeRoot) {
      return;
    }

    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};