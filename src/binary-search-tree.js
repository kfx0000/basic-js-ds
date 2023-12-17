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
    if(this.base) {
      let curr = this.base;
      while(curr) {
        if(data > curr.data) {
          if(curr.right) curr = curr.right; else {curr.right = node; curr = null;}
        } else {
          if(curr.left) curr = curr.left; else {curr.left = node; curr = null;}
        }
      }
    } else this.base = node;
  }

  search(data, mode) {
    let curr = this.base;
    while(curr) {
      if(data > curr.data) {
        if(curr.right) curr = curr.right; else return mode ? false : null;
      } else if(data < curr.data) {
        if(curr.left) curr = curr.left; else return mode ? false : null;
      } else return mode ? true : curr;
    }
  }

  has(data) {
    return this.search(data, true);
  }

  find(data) {
    return this.search(data, false);
  }

  del(node, data) {
    if(data > node.data) {
      node.right = this.del(node.right, data);
      return node;
    } else if(data < node.data) {
      node.left = this.del(node.left, data);
      return node;
    } else {
      if(!node.left && !node.right) return null;
      else if(!node.right) {
        node = node.left;
        return node;
      } 
      else if(!node.left) {
        node = node.right;
        return node;
      } else {
        let curr = node.right;
        while(curr.left) curr = curr.left;
        node.data = curr.data;
        node.right = this.del(node.right, curr.data);
        return node;
      }
    }
  }

  remove(data) {
    if(this.has(data) && this.base) this.del(this.base, data);
  }

  minMax(mode) {
    let node = this.base;
    if(mode) while (node.left) node = node.left;
    else while (node.right) node = node.right;
    return node.data;
  }

  min() {
    return this.minMax(true);
  }

  max() {
    return this.minMax(false);
  }
}

module.exports = {
  BinarySearchTree
};