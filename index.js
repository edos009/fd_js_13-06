"use strict";

/*
Способы объявления Класса
1. class Name{};
2. const Name = class{};
3. function f(){
  return class{};
}
*/

class Animal {
  constructor(name, type, countOfLags) {
    this.name = name;
    this.type = type;
    this.countOfLags = countOfLags;
  }

  eat() {
    return `${this.name} is eating`;
  }

  get countOfLags() {
    return this._countOfLags;
  }

  set countOfLags(value) {
    if (typeof value !== "number") {
      throw new TypeError("Count of lags must be number");
    }
    if (value < 0 || value > 4) {
      throw new RangeError("Count of lags must be 4");
    }

    this._countOfLags = value;
  }
}

const cat = new Animal("Sam", "cat", 4);

