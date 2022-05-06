var NumArray = function(nums) {
  this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  let sum = 0;
  for(let i= left;i<=right;i++){
    sum += this.nums[i];
  }
  return sum;
};

module.exports = NumArray