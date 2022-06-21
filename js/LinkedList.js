"use strict";

class LinkedListIterator {
  constructor(list) {
    this.collection = list;
    this.currentItem = null;
  }
  next() {
    this.currentItem = this.currentItem
      ? this.currentItem.next
      : this.collection.head;
    return {
      value: this.currentItem ? this.currentItem.value : undefined,
      done: !this.currentItem,
    };
  }
}

class ListItem {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  get value() {
    return this._value;
  }

  set value(elem) {
    this._value = elem;
  }
}

class LinkedList {
  constructor(...values) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const value of values) {
      this.push(value);
    }
  }

  push(value) {
    const newItem = new ListItem(value);
    if (this.length === 0) {
      this.head = newItem;
      this.tail = newItem;
    } else {
      this.tail.next = newItem;
      newItem.prev = this.tail;
      this.tail = newItem;
    }
    return ++this.length;
  }

  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this.tail.value;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    --this.length;
    return lastItem;
  }

  [Symbol.iterator]() {
    return new LinkedListIterator(this);
  }
}

const list1 = new LinkedList(1,2,3,4);
console.log(list1);
console.log(...list1);
