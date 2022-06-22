"use strict";

class Stack {
  constructor(maxSize = 5, ...args) {
    this._maxSize = maxSize;
    this._size = 0;
    for (const arg of args) {
      this.push(arg);
    }
  }

  get size() {
    return this._size;
  }

  get empty() {
    return this._size === 0;
  }

  push(arg) {
    if (this._size >= this._maxSize) {
      throw new RangeError("Our stack is full!");
    }
    this[`_${this._size}`] = arg;
    return ++this._size;
  }

  pop() {
    if (this.empty) {
      return;
    }
    const last = this[`_${this._size - 1}`];
    delete this[`_${this._size - 1}`];

    --this._size;
    return last;
  }

  pick() {
    return this[`_${this._size - 1}`];
  }
}

const stack = new Stack(5, 1, 1, 1, 1, 1);
console.log(stack);
