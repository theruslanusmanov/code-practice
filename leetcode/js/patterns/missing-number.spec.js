const missingNumber = require('./missing-number');

describe('#missingNumber', () => {
  /**
   * Input: nums = [3,0,1]
   * Output: 2
   * Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
   */
  it('should return 2', () => {
    expect(missingNumber([3,0,1])).toBe(2)
  })

  /**
   * Input: nums = [0,1]
   * Output: 2
   * Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
   */
  it('should return 2', () => {
    expect(missingNumber([0,1])).toBe(2)
  })

  /**
   * Input: nums = [9,6,4,2,3,5,7,0,1]
   * Output: 8
   * Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
   */
  it('should return 8', () => {
    expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8)
  })

  /**
   * Input: nums = [0]
   * Output: 1
   * Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.
   */
  it('should return 1', () => {
    expect(missingNumber([0])).toBe(1)
  })
})
