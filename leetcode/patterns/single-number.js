/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let singleNum;
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    hashMap.has(nums[i]) ? hashMap.set(nums[i], 2) : hashMap.set(nums[i], 1);
  }

  for (const [key, value] of hashMap.entries()) {
    if (value === 1) singleNum = key;
  }

  return singleNum;
};

module.exports = singleNumber;