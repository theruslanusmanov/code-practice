const Solution = require('./longest-substring-without-repeating-characters');

describe('#lengthOfLongestSubstring', () => {
  const solution = new Solution();

  /**
   * Input: s = "abcabcbb"
   * Output: 3
   * Explanation: The answer is "abc", with the length of 3.
   */
  it('should return length of 3', () => {
    expect(solution.lengthOfLongestSubstring('abcabcbb')).toBe(3)
  })

  /**
   * Input: s = "bbbbb"
   * Output: 1
   * Explanation: The answer is "b", with the length of 1.
   */
  it('should return length of 1', () => {
    expect(solution.lengthOfLongestSubstring('bbbbb')).toBe(1)
  })

  /**
   * Input: s = "pwwkew"
   * Output: 3
   * Explanation: The answer is "wke", with the length of 3.
   */
  it('should return length of 3', () => {
    expect(solution.lengthOfLongestSubstring('pwwkew')).toBe(3)
  })

  /**
   * Input: s = ""
   * Output: 0
   */
  it('should return length of 0', () => {
    expect(solution.lengthOfLongestSubstring('')).toBe(0)
  })
})
