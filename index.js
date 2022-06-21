"use strict";

//Костантная зависимость O(1)
const arr = [1, 2, 3, 4, 5];

console.log(arr[0]);
console.log(arr[arr.length - 1]);

//Логорифмическая зависимость O(log(n))
const arrSort = [1, 2, 4, 5, 6, 7, 9, 10, 12];
const binarySearch = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;
  let middle;
  while (start <= end) {
    middle = Math.round((start + end) / 2);
    if (arr[middle] === key) {
      return middle;
    }
    if (arr[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

console.log(binarySearch(arrSort, 9));

//Линейная зависимость O(n)
const linerSearch = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
};

console.log(linerSearch(arr, 3));

//Квадратичная зависимость O(n^2)
const createMultipleTable = (limit = 10) => {
  const table = [];
  for (let i = 1; i <= limit; i++) {
    for (let j = 1; j <= limit; j++) {
      table.push(`${i}*${j}=${i * j}`);
    }
  }
  return { table: table, length: table.length };
};

console.log(createMultipleTable(10));
