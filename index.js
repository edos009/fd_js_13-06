"use strict";

const optionsGlobal = {
  brackets: {
    "(": ")",
    "[": "]",
    "{": "}",
  },
  isStrict: true,
};
/**
 *
 * @param {string} str
 * @param {object} options
 * @returns
 */
const checkBrackets = (str, options) => {
  const brackets = options.brackets;
  const stack = new Stack(str.length);
  for (const symbol of str) {
    if (brackets[symbol]) {
      stack.push(symbol);
      continue;
    }
    if (brackets[stack.pick()] === symbol) {
      stack.pop();
    } else if (Object.values(brackets).includes(symbol)) {
      return false;
    }
  }
  return stack.empty;
};

console.log(checkBrackets("45-(2+5)*(3-7)", { brackets: { "(": ")" } }));
console.log(checkBrackets("(8-{[a]*9})", optionsGlobal));
console.log(checkBrackets(")()", { brackets: { "(": ")" } }));
console.log(checkBrackets("((()", { brackets: { "(": ")" } }));
