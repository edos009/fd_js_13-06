"use strict";

//Get summa all arguments function
const getSum = (...argument) => argument.reduce((accumulator, element) => accumulator + element);

console.log(getSum(1, 2, 3, 4, 5, 6));
