'use strict';

const LinkedList = require('../lib/ll');
const Node = require('../lib/node');
const inspect = require('./index');

describe('testing linked list', () => {
  let testList;
  beforeEach(() => {
    testList = new LinkedList();
  });

  afterEach(() => {
    testList = null;
  });

  test('making sure an instance is being generated', () => {
    expect(testList.head).toBeNull();
  });

  test('#insertAtHead', () => {
    testList.insertAtHead(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtHead(6);
    expect(testList.head.value).toEqual(6);
    expect(testList.head.next.value).toEqual(5);

    testList.insertAtHead(7);
    expect(testList.head.value).toEqual(7);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(5);

    inspect(testList, 'INSERT AT HEAD');
  });

  test('#insertAtEnd', () => {
    testList.insertAtEnd(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtEnd(6);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);

    testList.insertAtEnd(7);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(7);
    inspect(testList, 'INSERT AT END');
  });

  test('#find', () => {
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);

    expect(testList.find(5)).toBeInstanceOf(Node);
    expect(testList.find(9)).toBeNull();
  });

  test('#pop', () => {
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);

    expect(testList.pop()).toEqual(7);
    /* not sure how to write a second test here rofl */
  });

  test('#map', () => {
    testList.insertAtEnd(2);
    testList.insertAtEnd(3);
    testList.insertAtEnd(4);

    testList.map(x => x * 2);

    expect(testList.head.value).toEqual(4);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(8);
  });
});
