const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numStr = n.toString();

  let numbers = [];
  for(let i = 0; i < numStr.length; i++) {
    let temporary = numStr.split('');
    temporary.splice(i, 1);
    numbers.push(parseInt(temporary.join('')));
  }

  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
