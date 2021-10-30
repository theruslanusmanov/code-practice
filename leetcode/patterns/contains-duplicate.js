/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const duplicates = new Set(nums);
  return duplicates.size !== nums.length;
};

module.exports = containsDuplicate;