"use strict";

const getRandomArray = (min, max) => {
  const arrNumbers = [];
  for (let i = 0; i < 20; i++) {
    arrNumbers.push(Math.round(Math.random() * (max - min) + min))
  }
  return arrNumbers;
}

const getMinNumberArray = (arr) => {
  return Math.min(...arr);
}

const getMaxNumberArray = (arr) => {
  return Math.max(...arr);
}

console.log(getMinNumberArray(getRandomArray(10,50)));
console.log(getMaxNumberArray(getRandomArray(10, 50)));
