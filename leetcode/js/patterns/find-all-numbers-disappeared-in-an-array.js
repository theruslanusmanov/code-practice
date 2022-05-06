/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const existingNums = new Set(nums);
  const missingNums = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!existingNums.has(i)) {
      missingNums.push(i);
    }
  }

  return missingNums;
};

module.exports = findDisappearedNumbers;