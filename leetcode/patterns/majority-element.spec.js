const {
  majorityElementBrute,
  majorityElementHash,
  majorityElementSort,
} = require('./majority-element')


describe('#majorityElement', () => {
  /**
   * Input: nums = [3,2,3]
   * Output: 3
   */
  it('should return 3', () => {
    expect(majorityElementBrute([3,2,3])).toBe(3)
    expect(majorityElementHash([3,2,3])).toBe(3)
    expect(majorityElementSort([3,2,3])).toBe(3)
  })

  /**
   * Input: nums = [2,2,1,1,1,2,2]
   * Output: 2
   */
  it('should return 2', () => {
    expect(majorityElementBrute([2,2,1,1,1,2,2])).toBe(2)
    expect(majorityElementHash([2,2,1,1,1,2,2])).toBe(2)
    expect(majorityElementSort([2,2,1,1,1,2,2])).toBe(2)
  })
})
