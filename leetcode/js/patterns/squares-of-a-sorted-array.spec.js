const { sortedSquares } = require('./squares-of-a-sorted-array')

describe('#sortedSquares', () => {
  /**
   * Input: nums = [-4,-1,0,3,10]
   * Output: [0,1,9,16,100]
   * Explanation: After squaring, the array becomes [16,1,0,9,100].
   */
  it('should return [0,1,9,16,100]', () => {
    expect(sortedSquares([-4,-1,0,3,10])).toStrictEqual([0,1,9,16,100])
  })

  /**
   * Input: nums = [-7,-3,2,3,11]
   * Output: [4,9,9,49,121]
   */
  it('should return [4,9,9,49,121]', () => {
    expect(sortedSquares([-7,-3,2,3,11])).toStrictEqual([4,9,9,49,121])
  })
})
