const { nextGreatestLetter } = require('./find-smallest-letter-greater-than-target')

describe('#nextGreatestLetter', () => {
  /**
   * Input: letters = ["c","f","j"], target = "a"
   * Output: "c"
   */
  it('should return "c"', () => {
    expect(nextGreatestLetter(["c","f","j"], "a")).toBe("c")
  })

  /**
   * Input: letters = ["c","f","j"], target = "c"
   * Output: "f"
   */
  it('should return "f"', () => {
    expect(nextGreatestLetter(["c","f","j"], "c")).toBe("f")
  })

  /**
   * Input: letters = ["c","f","j"], target = "d"
   * Output: "f"
   */
  it('should return "f"', () => {
    expect(nextGreatestLetter(["c","f","j"], "d")).toBe("f")
  })

  /**
   * Input: letters = ["c","f","j"], target = "g"
   * Output: "j"
   */
  it('should return "j"', () => {
    expect(nextGreatestLetter(["c","f","j"], "g")).toBe("j")
  })

  /**
   * Input: letters = ["c","f","j"], target = "g"
   * Output: "c"
   */
  it('should return "c"', () => {
    expect(nextGreatestLetter(["c","f","j"], "j")).toBe("c")
  })
})
