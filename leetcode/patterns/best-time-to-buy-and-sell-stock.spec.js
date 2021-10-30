const { maxProfit } = require('./best-time-to-buy-and-sell-stock')

describe('#maxProfit', () => {
  /**
   * Input: prices = [7,1,5,3,6,4]
   * Output: 5
   * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
   * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
   */
  it('should return 5', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe(5)
  })

  /**
   * Input: prices = [7,6,4,3,1]
   * Output: 0
   * Explanation: In this case, no transactions are done and the max profit = 0.
   *
   */
  it('should return 0', () => {
    expect(maxProfit([7,6,4,3,1])).toBe(0)
  })
})
