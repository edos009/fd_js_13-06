"use strict";

//
const str = "to Be or NoT to bE";

const getStringToJadenCase = (string, separator = " ") =>
  string
    .split(separator)
    .map((elem) => elem.at(0).toUpperCase() + elem.toLowerCase().slice(1))
    .join(" ");

console.log(getStringToJadenCase(str));
