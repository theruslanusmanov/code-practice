const { invertTree } = require('./invert-binary-tree')

xdescribe('#invertTree', () => {
  /**
   * Input: root = [4,2,7,1,3,6,9]
   * Output: [4,7,2,9,6,3,1]
   */
  it('should return [4,7,2,9,6,3,1]', () => {
    expect(invertTree([4,2,7,1,3,6,9])).toBe([4,7,2,9,6,3,1])
  })

  /**
   * Input: root = [2,1,3]
   * Output: [2,3,1]
   */
  it('should return [2,3,1]', () => {
    expect(invertTree([2,1,3])).toBe([2,3,1])
  })

  /**
   * Input: root = []
   * Output: []
   */
  it('should return []', () => {
    expect(invertTree([])).toBe([])
  })
})
