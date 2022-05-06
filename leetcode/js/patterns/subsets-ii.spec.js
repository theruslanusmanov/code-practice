const { subsetsWithDup } = require('./subsets-ii')

describe('#subsetsWithDup', () => {
  /**
   * Input: nums = [1,2,2]
   * Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
   */
  it('should return output', () => {
    expect(subsetsWithDup([1,2,2])).toStrictEqual([[],[1],[1,2],[1,2,2],[2],[2,2]])
  })

  /**
   * Input: nums = [0]
   * Output: [[],[0]]
   */
  it('should return output', () => {
    expect(subsetsWithDup([0])).toStrictEqual([[],[0]])
  })
})
