const Solution = require('./reverse-integer');

describe('Solution', () => {
  const solution = new Solution();

  /**
   * Input: x = 123
   * Output: 321
   */
  it('should return 321', () => {
    expect(solution.reverse(123)).toBe(321)
  })

  /**
   * Input: x = -123
   * Output: -321
   */
  it('should return -321', () => {
    expect(solution.reverse(-123)).toBe(-321)
  })

  /**
   * Input: x = 120
   * Output: 21
   */
  it('should return 21', () => {
    expect(solution.reverse(120)).toBe(21)
  })

  /**
   * Input: x = 0
   * Output: 0
   */
  it('should return 0', () => {
    expect(solution.reverse(0)).toBe(0)
  })
})
