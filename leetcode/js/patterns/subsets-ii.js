/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const result = [[]];
  nums.sort();

  function helper(start, set = []) {
    for (let i = start; i < nums.length; ++i) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      set.push(nums[i]);

      result.push([...set]);

      helper(i + 1, set);

      set.pop();
    }
  }

  helper(0);
  return result;
};

module.exports = { subsetsWithDup };