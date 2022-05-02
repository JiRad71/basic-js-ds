const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.rootNode = null;
  }
}


class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode === null){
      this.rootNode = newNode;
    }else {
      this.addChield(newNode, this.rootNode);
    }
  }

  addChield(newNode, node ) {
    if (newNode.data < node.data){
      if (node.left === null){
        node.left = newNode;
      } else {
        this.addChield(newNode, node.left);
      } 
    } else {
      if (node.right === null){
        node.right= newNode;
      } else {
        this.addChield(newNode, node.right);
      } 
    }
  }

  has(data, node = this.rootNode) {
    if (node === null) {
      return false;
    }
    if (node.data > data) {
     return this.has(data, node.left);
    }
    else if (node.data < data) {
      return this.has(data, node.right);
    }
    else if (node.data == data) {
      return true;
    }
    else {
      return false;
    }
  }

  find( data, node = this.rootNode ) {
    if (node.data < data){
      if (node.right === null){
        return null;
      }else {
        return this.find(data, node.right)
      }
    }
    else if (node.data > data){
      if (node.left === null){
        return null;
      }else {
        return this.find (data, node.left)
      }
    }
    else if (node.data === data) return node;
    else return null;
  }
  
  remove(data ) {
    this.rootNode == this.removeItem(data, this.rootNode);
  }

  removeItem (data, node = this.rootNode){
    if (node === null){
      return null; 
      } else if (data < node.data){
      node.left = this.removeItem(data, node.left);
      return node;
      } else if (data > node.data){
      node.right = this.removeItem(data, node.right);
      return node;
      } else {
      if (node.right === null && node.left === null){
      node = null;
      return node; 
      }
      if(node.right === null){
      node = node.left;//g
      return node;
      } else if (node.left === null){
      node = node.right;//g
      return node;
      }
    let newNode = this.minNode(node.right);
    node.data = newNode.data;
    node.right = this.removeItem(newNode.data, node.right)
    return node;
  }
  }

  minNode (node) {
    if (node.left === null){
      return node;
    }else {
      return this.minNode(node.left);
    }
  }
  min() {
    if (this.rootNode.data === null){
      return null;
    }
    let min = this.minNode(this.rootNode);
    return min?min.data:null//f
  }
  maxNode (node) {
    if (node.right === null){
      return node;
    }else {
      return this.maxNode(node.right);
    }
  }
  max() {
    if (this.rootNode.data === null){
      return null;
    }
    let max = this.maxNode(this.rootNode);
    return max ?max.data: null//f
  }
}

module.exports = {
  BinarySearchTree
};