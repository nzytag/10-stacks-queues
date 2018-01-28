'use strict';

const Queue = require('../lib/queue');

describe('queue data structure module', function () {
  beforeEach(() => this.queue = new Queue());

  describe('default properties', () => {
    it('should create a new instance of a queue', () => {
      expect(this.queue).toBeInstanceOf(Queue);
    });
    it('should have a maxSize property with a default val of 666', () => {
      expect(this.queue.maxSize).toEqual(666);
    });
  });


  describe('Enqueue: added a item the queue', () => {
    it('should have a size of 12', () => {
      [...Array(12)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)));
      expect(this.queue.size).toEqual(12);
    });
    it('should add a new node to the front with a value of 4', () => {
      this.queue.enqueue(13);
      expect(this.queue.front.val).toEqual(13);
    });
  });


  describe('Dequeue: removing an item from the queue', () => {
    it('should remove the last node from the queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      expect(this.queue.front.val).toEqual(1);
      expect(this.queue.dequeue().val).toEqual(2);
    });
    it('should throw an error if there is nothing to remove', () => {
      expect(() => {
        this.queue.dequeue();
      }).toThrow();
    });
  });
});