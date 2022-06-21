"use strict";

class MyArrayIterator {
  constructor(myArray) {
    this.collection = myArray;
    this.currentPosition = 0
  }
  next() {
    return {
      value: this.collection[this.currentPosition++],
      done: this.currentPosition > this.collection.length,
    }
  }
}

class MyArrayClass {
  constructor() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }

  push(elem) {
    this[this.length] = elem;
    return ++this.length;
  }

  pop() {
    if (this.length === 0) {
      return;
    }
    const lastElem = this[this.length - 1];
    delete this[this.length - 1];
    --this.length;
    return lastElem;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  every(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === false) {
        return false;
      }
    }
    return true;
  }

  some(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  }

  filter(callback) {
    const newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArr.push(this[i]);
      }
    }
    return newArr;
  }

  concat(instanceOurArr) {
    if (MyArrayClass.isMyArrayClass(instanceOurArr) === false) {
      throw new TypeError("Need instance MyArrayClass");
    }
    const newMyArr = new MyArrayClass();
    for (let i = 0; i < this.length; i++) {
      newMyArr.push(this[i]);
    }
    for (let i = 0; i < instanceOurArr.length; i++) {
      newMyArr.push(instanceOurArr[i]);
    }
    return newMyArr;
  }

  flat(depth = 1) {
    let newMyArr = new MyArrayClass();
    this.forEach((elem) => {
      const isMyArr = MyArrayClass.isMyArrayClass(elem);
      if (isMyArr && depth) {
        const subNewMyArray = elem.flat(depth - 1);
        newMyArr = newMyArr.concat(subNewMyArray);
      } else if (elem !== undefined) {
        newMyArr.push(elem);
      }
    });

    return newMyArr;
  }

  static isMyArrayClass(obj) {
    return obj instanceof MyArrayClass;
  }

  [Symbol.iterator]() {
    return new MyArrayIterator(this);
  }
}

const myArray1 = new MyArrayClass(1, 2, 3, 4, 5);
const myArray2 = new MyArrayClass(1, 2, 3, 4, 5);
console.log(...myArray1);
for (const elem of myArray1) {
  console.log(elem);
}
