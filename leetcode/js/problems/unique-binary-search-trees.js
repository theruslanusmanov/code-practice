/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let memo = new Map();

  const compute = (cur) => {
    if (cur === 1 || cur === 0) {
      return 1;
    }

    if (memo.has(cur)) {
      return memo.get(cur);
    }

    let res = 0;

    for (let i = 1; i <= cur; i++) {
      res = res + (compute(i - 1) * compute(cur - i));
    }

    memo.set(cur, res);

    return res;
  }

  return compute(n);
};
