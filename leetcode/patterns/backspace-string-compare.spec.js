const { backspaceCompare } = require('./backspace-string-compare')

describe('#backspaceCompare', () => {
  /**
   * Input: s = "ab#c", t = "ad#c"
   * Output: true
   * Explanation: Both s and t become "ac".
   */
  it('should return true', () => {
    expect(backspaceCompare("ab#c", "ad#c")).toBe(true)
  })

  /**
   * Input: s = "ab##", t = "c#d#"
   * Output: true
   * Explanation: Both s and t become "".
   */
  it('should return true', () => {
    expect(backspaceCompare("ab##", "c#d#")).toBe(true)
  })

  /**
   * Input: s = "a##c", t = "#a#c"
   * Output: true
   * Explanation: Both s and t become "c".
   */
  it('should return true', () => {
    expect(backspaceCompare("a##c", "#a#c")).toBe(true)
  })

  /**
   * Input: s = "a#c", t = "b"
   * Output: false
   * Explanation: s becomes "c" while t becomes "b".
   */
  it('should return false', () => {
    expect(backspaceCompare("a#c", "b")).toBe(false)
  })
})
