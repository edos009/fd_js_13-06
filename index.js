"use strict";

//Рекурсия - это способность функции, которая вызывает сама себя.

const fuctorial = (num = 4) => {
  if (num < 0) {
    return null;
  }
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * fuctorial(num - 1);
};

console.log(fuctorial(5));

  debugger;
const getPow = (num = 2, pow = 3) => {
  if (pow < 0) {
    return null;
  }
  if (pow === 0) {
    return 1;
  }
  return num * getPow(num, pow - 1);
};

console.log(getPow());
