//! Example 1
//Object with data
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

function MyArrayPrototype() {
  this.push = function (elem) {
    this[this.length] = elem;
    return ++this.length;
  };
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastElem = this[this.length - 1];
    delete this[this.length - 1];
    --this.length;
    return lastElem;
  };
  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
  this.every = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === false) {
        return false;
      }
    }
    return true;
  };
  this.some = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
  this.filter = function(callback) {
    const newArr = new  MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArr.push(this[i])
      }
    }
    return newArr;
  }
}

MyArray.prototype = new MyArrayPrototype();
const myArr = new MyArray(1,2,3,4,5,6,7,8,9,10);
const myArr2 = myArr.filter(function (elem) {
  return elem % 2 === 0;
});

console.log(myArr2);
