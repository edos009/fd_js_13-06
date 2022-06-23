"use strict";

const numbers1 = [1,2,3,4,5,2,1];
const numbers2 = [5,7,2,1];

// const mySetArr = new Set(numbers1.concat(numbers2));
const mySetArr = new Set([...numbers1, ...numbers2]);

console.log([...mySetArr]);