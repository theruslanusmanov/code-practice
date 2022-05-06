const containsDuplicate = require('./contains-duplicate');

describe('Solution', () => {
  /**
   * Input: nums = [1,2,3,1]
   * Output: true
   */
  it('should return true', () => {
    expect(containsDuplicate([1,2,3,1])).toBe(true)
  })

  /**
   * Input: nums = [1,2,3,4]
   * Output: false
   */
  it('should return false', () => {
    expect(containsDuplicate([1,2,3,4])).toBe(false)
  })

  /**
   * Input: nums = [1,1,1,3,3,4,3,2,4,2]
   * Output: true
   */
  it('should return true', () => {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true)
  })
})
