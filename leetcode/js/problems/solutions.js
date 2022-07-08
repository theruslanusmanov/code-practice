/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits == null || digits.length == 0) return [];

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const res = [];
  const go = (i, s) => {
    if (i === digits.length) {
      res.push(s);
      return;
    }

    for (const c of map[digits[i]]) {
      go(i + 1, s + c);
    }
  };

  go(0, '');
  return res;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let low = j + 1;
      let high = nums.length - 1;

      while (low < high) {
        const sum = nums[i] + nums[j] + nums[low] + nums[high];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[low], nums[high]]);
          while (nums[low] === nums[low + 1]) low++;
          while (nums[high] === nums[high - 1]) high--;
          low++;
          high--;
        } else if (sum < target) {
          low++;
        } else {
          high--;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return result;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let fast = head, slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(N) {
  let ans = [], m = 2 * N;

  const dfs = (pos, open, seq) => {
    if (pos === m) {
      let res = new Array(m);
      for (let i = 0; i < m; i++)
        res[i] = seq & 1 << i ? '(' : ')';
      ans.push(res.join(''));
      return;
    }
    if (open) dfs(pos + 1, open - 1, seq);
    if (m - pos > open) dfs(pos + 1, open + 1, seq | 1 << pos);
  };

  dfs(0, 0, 0);
  return ans;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(data) {
  let current = data;
  let count = 0;
  while (current) {
    if (count % 2 === 0 && current.next) {
      const tmp = current.val;
      current.val = current.next.val;
      current.next.val = tmp;
    }
    count++;
    current = current.next;
  }
  return data;
};

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(A, B) {
  if (A === -2147483648 && B === -1) return 2147483647;
  let ans = 0, sign = 1;
  if (A < 0) A = -A, sign = -sign;
  if (B < 0) B = -B, sign = -sign;
  if (A === B) return sign;
  for (let i = 0, val = B; A >= B; i = 0, val = B) {
    while (val > 0 && val <= A) val = B << ++i;
    A -= B << i - 1, ans += 1 << i - 1;
  }
  return sign < 0 ? -ans : ans;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(N) {
  const swap = (a, b) => [N[a], N[b]] = [N[b], N[a]];
  let len = N.length - 1, i, j;
  for (i = len - 1; N[i] >= N[i + 1];) i--;
  for (let k = i + 1; len > k; k++, len--) swap(k, len);
  if (~i) {
    for (j = i + 1; N[i] >= N[j];) j++;
    swap(i, j);
  }
};
