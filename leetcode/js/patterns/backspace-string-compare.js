/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  function buildStack(s) {
    const stack = [];
    for (let ch of s) {
      if (ch !== '#') {
        stack.push(ch);
      } else {
        stack.pop();
      }
    }
    return stack;
  }

  const stackS = buildStack(s);
  const stackT = buildStack(t);

  return stackS.join('') === stackT.join('');
};

module.exports = { backspaceCompare };