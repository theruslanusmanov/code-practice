/**
 * @param {number} n
 * @return {number}
 */
var climbStairsMemo = function(n) {
  const memo = new Array(n + 1).fill(0);

  var climStairs = function(i, n, memo) {
    if (i > n) {
      return 0;
    }
    if (i === n) {
      return 1;
    }
    if (memo[i] > 0) {
      return memo[i];
    }

    memo[i] = climStairs(i + 1, n, memo) + climStairs(i + 2, n, memo);
    return memo[i];
  }

  return climStairs(0, n, memo);
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairsDynamic = function(n) {
  if (n === 1) {
    return 1;
  }

  dp = [];
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

module.exports = { climbStairsMemo, climbStairsDynamic };