/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let revertedNumber = 0;
  while(x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10;
    x /= 10;
  }

  return x === revertedNumber || x === revertedNumber / 10;
};

var isPalindrome = (x) => String(x) === String(x).split("").reverse().join("");

module.exports = isPalindrome;