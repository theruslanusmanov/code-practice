const findDisappearedNumbers = require('./find-all-numbers-disappeared-in-an-array');

describe('#findDisappearedNumbers', () => {
  /**
   * Input: nums = [4,3,2,7,8,2,3,1]
   * Output: [5,6]
   */
  it('should return [5,6]', () => {
    expect(findDisappearedNumbers([4,3,2,7,8,2,3,1])).toStrictEqual([5,6])
  })

  /**
   * Input: nums = [1,1]
   * Output: [2]
   */
  it('should return [2]', () => {
    expect(findDisappearedNumbers([1,1])).toStrictEqual([2])
  })
})
