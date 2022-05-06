const singleNumber = require('./single-number');

describe('#singleNumber', () => {
  /**
   * Input: nums = [2,2,1]
   * Output: 1
   */
  it('should return 1', () => {
    expect(singleNumber([2,2,1])).toBe(1)
  })

  /**
   * Input: nums = [4,1,2,1,2]
   * Output: 4
   */
  it('should return 4', () => {
    expect(singleNumber([4,1,2,1,2])).toBe(4)
  })

  /**
   * Input: nums = [1]
   * Output: 1
   */
  it('should return 1', () => {
    expect(singleNumber([1])).toBe(1)
  })
})
