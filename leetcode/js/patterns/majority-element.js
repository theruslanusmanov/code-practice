/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElementBrute = function(nums) {
  const majorityCount = nums.length / 2;

  for (let num of nums) {
    let count = 0;
    for (let elem of nums) {
      if (elem === num) {
        count += 1;
      }
    }

    if (count > majorityCount) {
      return num;
    }
  }

  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElementHash = function(nums) {
  function countNums(nums) {
    const counts = new Map();
    for (let num of nums) {
      if (!counts.has(num)) {
        counts.set(num, 1);
      } else {
        counts.set(num, counts.get(num) + 1);
      }
    }
    return counts;
  }

  const counts = countNums(nums);

  let majorityEntry = null;
  for (let [key, value] of counts.entries()) {
    if (majorityEntry == null || value > majorityEntry.value) {
      majorityEntry = { key, value } ;
    }
  }

  return majorityEntry.key;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElementSort = function(nums) {
  const sortedNums = nums.sort();
  const midNum = Math.ceil(sortedNums.length / 2);
  return sortedNums[midNum];
};


module.exports = {
  majorityElementBrute,
  majorityElementHash,
  majorityElementSort,
};