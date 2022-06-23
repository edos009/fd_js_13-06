"use strict";

const dictionary = new Map();

dictionary.set("мир", "peace");
dictionary.set("небо", "sky");
dictionary.set("людина", "man");
dictionary.set("море", "sea");
dictionary.set("поїхати", "go");
dictionary.set("на", "on");
dictionary.set("як", "as");
dictionary.set("група", "group");
dictionary.set("навчання", "teaching");
dictionary.set("мова", "language");
dictionary.set("програмування", "programming");
dictionary.set("займатися", "engage in");

const str = "Група студентів поїхати займатися Програмування на Море як мир";

const translate = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => (dictionary.has(word) ? dictionary.get(word) : word))
    .join(" ");
};

// console.log(translate(str));

for (const iterator of dictionary.keys()) {
  console.log(iterator);
}
// console.log(...dictionary.keys());

for (const value of dictionary.values()) {
  console.log(value);
}
// console.log(...dictionary.values());

const arrayKeysMap = [...dictionary.keys()];
console.log(arrayKeysMap);
