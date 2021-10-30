/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var right = Array(nums.length).fill(1);
  for (var i = 1; i < nums.length; i++) {
    right[nums.length - 1 - i] = right[nums.length - i] * nums[nums.length - i];
  }
  var left = 1;
  for (var i = 0; i < nums.length; i++) {
    right[i] = left * right[i];
    left = left * nums[i];
  }
  return right;
};

module.exports = { productExceptSelf };