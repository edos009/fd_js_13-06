"use strict";

//Get summa all arguments function
const getSum = (...theArguments) =>
  theArguments.reduce((accumulator, element) => accumulator + element);

console.log(getSum(1, 2, 3, 4, 5, 6));

const arr1 = ['a', 'e', 'i', 'o', 'u', 'y'];
const arr2 = ['k', 'l', 'm', 'n', 'b', 'x'];

const arr3 = [...arr1, ...arr2];
console.log(arr3);
