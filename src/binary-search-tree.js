const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  root() {
    return this.base;
  }

  add(data) {
    let node = new Node(data);
    if(!this.base) {
      this.base = node;
    } else {
      let curr = this.base;
      while(curr) {
        if(data > curr.data) {
          if(curr.right) curr = curr.right; else {curr.right = node; curr = null;}
        } else {
          if(curr.left) curr = curr.left; else {curr.left = node; curr = null;}
        }
      }
    }
  }

  has(data) {
    let curr = this.base;
    while(curr) {
      if(data === curr.data) return true;
      else if(data > curr.data) {
        if(curr.right) curr = curr.right; else return false;
      } else {
        if(curr.left) curr = curr.left; else return false;
      }
    }
  }

  find(data) {
    let curr = this.base;
    while(curr) {
      if(data === curr.data) return curr;
      else if(data > curr.data) {
        if(curr.right) curr = curr.right; else return null;
      } else {
        if(curr.left) curr = curr.left; else return null;
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let node = this.base;
    while (node.left) node = node.left;
    return node.data;
  }

  max() {
    let node = this.base;
    while (node.right) node = node.right;
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};