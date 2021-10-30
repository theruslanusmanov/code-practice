const isPalindrome = require('./palindrome-number');

describe('isPalindrome', () => {
  /**
   * Input: x = 121
   * Output: true
   */
  it('should return true', () => {
    expect(isPalindrome(121)).toBe(true)
  })

  /**
   * Input: x = -121
   * Output: false
   * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
   */
  it('should return false', () => {
    expect(isPalindrome(-121)).toBe(false)
  })

  /**
   * Input: x = 10
   * Output: false
   * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
   */
  it('should return false', () => {
    expect(isPalindrome(120)).toBe(false)
  })

  /**
   * Input: x = -101
   * Output: false
   */
  it('should return false', () => {
    expect(isPalindrome(-101)).toBe(false)
  })
})