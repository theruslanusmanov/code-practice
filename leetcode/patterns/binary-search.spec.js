const { search } = require('./binary-search')

describe('#search', () => {
  /**
   * Input: nums = [-1,0,3,5,9,12], target = 9
   * Output: 4
   * Explanation: 9 exists in nums and its index is 4
   */
  it('should return 4', () => {
    expect(search([-1,0,3,5,9,12], 9)).toBe(4)
  })

  /**
   * Input: nums = [-1,0,3,5,9,12], target = 2
   * Output: -1
   * Explanation: 2 does not exist in nums so return -1
   */
  it('should return -1', () => {
    expect(search([-1,0,3,5,9,12], 2)).toBe(-1)
  })
})
