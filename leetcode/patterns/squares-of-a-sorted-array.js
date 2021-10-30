/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  return nums.map(v => v * v).sort((a, b) => a > b ? 1 : -1);
};

module.exports = { sortedSquares };