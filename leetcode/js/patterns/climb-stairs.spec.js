const { climbStairsMemo, climbStairsDynamic } = require('./climb-stairs')

describe('#climbStairs', () => {
  /**
   * Input: n = 2
   * Output: 2
   * Explanation: There are two ways to climb to the top.
   * 1. 1 step + 1 step
   * 2. 2 steps
   */
  it('should return 2', () => {
    expect(climbStairsMemo(2)).toBe(2)
    expect(climbStairsDynamic(2)).toBe(2)
  })

  /**
   * Input: n = 3
   * Output: 3
   * Explanation: There are three ways to climb to the top.
   * 1. 1 step + 1 step + 1 step
   * 2. 1 step + 2 steps
   * 3. 2 steps + 1 step
   */
  it('should return 3', () => {
    expect(climbStairsMemo(3)).toBe(3)
    expect(climbStairsDynamic(3)).toBe(3)
  })
})
