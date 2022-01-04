/**
 * @param {number} numRows
 * @return {number[][]}
 */
export const generate = function(numRows) {
  const result = [new Array(numRows).fill(1)];
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j <= i; j++) {
      if (j !== 0 && j !== i) {
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j]
      }
    }
  }
  return result;
};
