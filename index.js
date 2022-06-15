"use strict";

//
const str = "I love to eat ice cream";
const vowels = ["a", "e", "i", "o", "u", "y"];

const getCountVowel = (string, vowels) =>
  string
    .toLowerCase()
    .split("")
    .filter((elem) => vowels.includes(elem)).length;

console.log(getCountVowel(str, vowels));

//"Fistname Lastname" => "Lastname F."

const fullName = "edik tiutiunnyk";

const getProcessedFullname = (string, separator = " ") => {
  const arrReverseFullName = string
    .split(separator)
    .reverse()
    .map((elem) => elem.at(0).toUpperCase() + elem.slice(1));

  return (
    arrReverseFullName.shift() + " " + arrReverseFullName.map((elem) => elem.at(0) + ".").join()
  );
};

console.log(getProcessedFullname(fullName));
