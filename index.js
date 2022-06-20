"use strict";

const symbol = Symbol("This is symbol");

const obj = {
  [symbol]: "I am ED",
};

console.log(obj[symbol]);
