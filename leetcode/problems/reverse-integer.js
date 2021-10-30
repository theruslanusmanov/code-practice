class Solution {

  /**
   * @param {number} x
   * @return {number}
   */
  reverse(x) {
    if (x < (Math.pow(2, 30) * -1) || x > Math.pow(2,31) - 1) return 0;
    const str = x.toString();
    const reversedNum = parseInt(str.split('').reverse().join(''));
    return str[0] === '-' ? -reversedNum : reversedNum;
  }
}

module.exports = Solution;