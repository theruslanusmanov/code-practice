class Solution {

  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    const n = s.length;

    let res = 0;
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        if (this.#checkRepetition(s, i, j)) {
          res = Math.max(res, j - i + 1);
        }
      }
    }

    return res;
  }

  /**
   * @param {string} s
   * @param {number} start
   * @param {number} end
   * @return {boolean}
   */
  #checkRepetition(s, start, end) {
    const chars = new Array(128).fill(0);

    for (let i = start; i <= end; i++) {
      let c = s[i].charCodeAt(0);
      chars[c]++;
      if (chars[c] > 1) {
        return false;
      }
    }

    return true;
  }
}

module.exports = Solution;