var threeSum = function(nums) {
  const result = {};

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        const key = nums[i].toString() + nums[left].toString() +
          nums[right].toString();
        result[key] = [nums[i], nums[left], nums[right]];
      }

      if (sum < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return Object.values(result);
};
