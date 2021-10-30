const NumArray = require('./range-sum-query-immutable')

describe('#NumArray', () => {
  /**
   * Input
   * ["NumArray", "sumRange", "sumRange", "sumRange"]
   * [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
   * Output
   * [null, 1, -1, -3]
   *
   * Explanation
   * NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
   * numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
   * numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
   * numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
   */
  it('should return [null, 1, -1, -3]', () => {
    const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);

    expect(numArray.sumRange(0, 2)).toEqual(1)
    expect(numArray.sumRange(2, 5)).toEqual(-1)
    expect(numArray.sumRange(0, 5)).toEqual(-3)
  })
})
