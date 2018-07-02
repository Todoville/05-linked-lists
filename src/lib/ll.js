'use strict';

const Node = require('../lib/node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }


  insertAtHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  }

  insertAtEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  } 

  find(value) {
    if (!this.head) {
      throw new Error('Empty linked list');
    }

    if (this.head.value === value) {
      return this.head;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  pop() {
    // o(1) space complexity, o(n) time complexity where n is the number of nodes
    if (!this.head) return undefined;

    let poppedNode;
    if (!this.head.next) {
      poppedNode = this.head;
      this.head = null;
      return poppedNode.value;
    }

    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }

    poppedNode = currentNode.next;
    currentNode.next = null;
    return poppedNode.value;
  }

  // this should have an o(n) time complexity and an o(1) space complexity
  remove(value) {
    if (!this.head) throw new Error('empty list');

    if (this.head.value === value) {
      this.head = this.head.next;
    }
    let previousNode = this.head;
    let currentNode = previousNode.next;
    while (currentNode) {
      if (currentNode.data === value) {
        previousNode.next = currentNode.next;
        currentNode = currentNode.next;
        return this;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return this;
  }

  // this should have an o(n) time complexity and an o(1) space complexity
  map(callback) {
    if (!this.head) throw new Error('empty list');
    let previousNode = this.head;
    let currentNode = previousNode.next;
    while (currentNode) {
      previousNode.value = callback(previousNode.value);
      previousNode = currentNode;
      currentNode = currentNode.next;  
    }
    previousNode.value = callback(previousNode.value);
    return this;
  }
};
