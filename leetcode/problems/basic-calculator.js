/**
 * TODO:
 * Problem: https://leetcode.com/problems/basic-calculator/
 *
 * Constraints:
 *
 * 1 <= s.length <= 3 * 105
 * s consists of digits, '+', '-', '(', ')', and ' '.
 * s represents a valid expression.
 * '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
 * '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
 * There will be no two consecutive operators in the input.
 * Every number and running calculation will fit in a signed 32-bit integer.
 *
 * @param {string} s
 * @return {number}
 */
export const calculate = function (s) {
  const stack = [];
  let result = 0;
  let number = 0;
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    if (+s[i] >= 1 && +s[i] <= 3 * 105) {
      number = 10 * number + +(s[i] - '0');
    } else if (s[i] === '+') {
      result += sign * number;
      number = 0;
      sign = 1;
    } else if (s[i] === '-') {
      result += sign * number;
      number = 0;
      sign = -1;
    } else if (s[i] === '(') {
      //we push the result first, then sign;
      stack.push(result);
      stack.push(sign);
      //reset the sign and result for the value in the parenthesis
      sign = 1;
      result = 0;
    } else if (s[i] === ')') {
      result += sign * number;
      number = 0;
      result *= stack.pop();    //stack.pop() is the sign before the parenthesis
      result += stack.pop();   //stack.pop() now is the result calculated before the parenthesis
    }
  }

  if (number !== 0) result += sign * number;

  return result;
};
