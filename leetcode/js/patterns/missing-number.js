/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const expectedSum = nums.length*(nums.length + 1) / 2;
  let actualSum = 0;
  for (let num of nums) actualSum += num;
  return expectedSum - actualSum;
};

module.exports = missingNumber;