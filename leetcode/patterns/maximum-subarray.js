/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let prevMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prevMax = Math.max(nums[i], nums[i] + prevMax);
    if (prevMax > max) {
      max = prevMax;
    }
  }
  return max;
};

module.exports = maxSubArray;