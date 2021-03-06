/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
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
var fourSum = function (nums, target) {
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
var removeNthFromEnd = function (head, n) {
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
var generateParenthesis = function (N) {
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
var swapPairs = function (data) {
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
var divide = function (A, B) {
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
var nextPermutation = function (N) {
    const swap = (a, b) => [N[a], N[b]] = [N[b], N[a]];
    let len = N.length - 1, i, j;
    for (i = len - 1; N[i] >= N[i + 1];) i--;
    for (let k = i + 1; len > k; k++, len--) swap(k, len);
    if (~i) {
        for (j = i + 1; N[i] >= N[j];) j++;
        swap(i, j);
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // When dividing the roated array into two halves, one must be sorted.

        // Check if the left side is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                // target is in the left
                right = mid - 1;

            } else {
                // target is in the right
                left = mid + 1;
            }
        }

        // Otherwise, the right side is sorted
        else {
            if (nums[mid] <= target && target <= nums[right]) {
                // target is in the right
                left = mid + 1;

            } else {
                // target is in the left
                right = mid - 1;
            }
        }

    }

    return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (N, T) {
    const find = (target, arr, left = 0, right = arr.length) => {
        while (left <= right) {
            let mid = left + right >> 1;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }

        return left;
    };
    let Tleft = find(T, N);
    if (N[Tleft] !== T) return [-1, -1];
    return [Tleft, find(T + 1, N, Tleft) - 1];
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let row = new Set(),
            col = new Set(),
            box = new Set();

        for (let j = 0; j < 9; j++) {
            let _row = board[i][j];
            let _col = board[j][i];
            let _box = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) +
            (j % 3)];

            if (_row != '.') {
                if (row.has(_row)) return false;
                row.add(_row);
            }
            if (_col != '.') {
                if (col.has(_col)) return false;
                col.add(_col);
            }

            if (_box != '.') {
                if (box.has(_box)) return false;
                box.add(_box);
            }
        }
    }
    return true;
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    var str = '1';
    for (var i = 1; i < n; i++) {
        var strArray = str.split('');
        str = '';
        var count = 1;
        // Loop through current nth level line
        for (var j = 0; j < strArray.length; j++) {
            // Next digit is different
            if (strArray[j] !== strArray[j + 1]) {
                // Go to next non-matching digit
                str += count + strArray[j];
                count = 1;
            } else {
                count++;
            }
        }
    }
    return str;
};

/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function (houses, cost, m, n, target) {
    const cache = {};
    const backtrack = (prevColor, house, numNeighborhoods) => {
        // return if we have too many neighborhoods
        if (numNeighborhoods > target) return Infinity;

        // if we have painted all the houses
        // return 0 if we have the correct number of neighborhoods
        // otherwise return maximum value
        if (house === m) {
            return numNeighborhoods === target ? 0 : Infinity;
        }

        // if we have already seen this combination, return the result
        const key = [prevColor, house, numNeighborhoods].join('-');
        if (cache.hasOwnProperty(key)) return cache[key];

        // case if house is already painted
        if (houses[house]) {
            // see if we have a new neighborhood
            const additionalNeighborhoods = houses[house] !== prevColor ? 1 : 0;
            return cache[key] = backtrack(houses[house], house + 1,
                numNeighborhoods + additionalNeighborhoods);
        }

        let min = Infinity;
        for (let color = 0; color < n; color++) {
            // paint the house this color (offset by 1)
            houses[house] = color + 1;
            // see if we have a new neighborhood
            const additionalNeighborhoods = houses[house] !== prevColor ? 1 : 0;
            // find the minimum price to paint all other houses with this combination
            const res = backtrack(houses[house], house + 1,
                numNeighborhoods + additionalNeighborhoods);
            // price to pain the house this color
            const price = cost[house][color];
            min = Math.min(min, price + res);
            // remove the paint
            houses[house] = 0;
        }
        return cache[key] = min;
    };

    // Backtrack through all the different possibilities
    // if the result is max value, return -1;
    const result = backtrack(-1, 0, 0);
    return result === Infinity ? -1 : result;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function (grid) {
    let m = grid.length, n = grid[0].length, mod = 10 ** 9 + 7;
    let ans = 0, memo = Array(m).fill(0).map(() => Array(n).fill(-1));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ans = (ans + dfs(i, j)) % mod;
        }
    }
    return ans;

    function dfs(i, j) {
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        if (memo[i][j] !== -1) return memo[i][j];
        let ans = 1;
        for (let [x, y] of directions) {
            let newX = i + x, newY = j + y;
            if (newX < 0 || newX >= m || newY < 0 || newY >= n || grid[newX][newY] <=
                grid[i][j]) continue;
            ans = (ans + dfs(newX, newY)) % mod;
        }
        return memo[i][j] = ans;
    }
};

/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
    const mod = 1e9 + 7;
    let dp = Array(n + 1).fill(0), res = 0;
    dp[1] = 1;
    for (let d = 2; d <= n; d++) {
        for (let i = 1; i < d; i++) {
            if (d - i >= delay && d - i < forget) {
                dp[d] += dp[i];
                dp[d] %= mod;
            }
        }
    }

    for (let i = 1; i <= n; i++) {
        if (n - i < forget) res = (res + dp[i]) % mod;
    }
    return res;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
    let r = 0, c = 0,
        dr = 0, dc = 1, // Add column or row.
        matrix = Array(m).fill(-1).map(_ => Array(n).fill(-1));

    const need2swap = () => (
        r + dr < 0 || r + dr >= m ||
        c + dc < 0 || c + dc >= n ||
        matrix[r + dr][c + dc] !== -1
    );

    while (head) {
        matrix[r][c] = head.val;

        if (need2swap()) {
            const temp = dc;
            dc = -dr;
            dr = temp;
        }

        r += dr;
        c += dc;
        head = head.next;
    }

    return matrix;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
    let n = nums.length, deq = [n - 1];
    for (let i = n - 2; ~i; i--) {
        if (deq[0] - i > k) deq.shift();
        nums[i] += nums[deq[0]];
        while (deq.length && nums[deq[deq.length - 1]] <= nums[i]) deq.pop();
        deq.push(i);
    }
    return nums[0];
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    if (!candidates || candidates.length === 0) return [];
    let res = [];
    candidates.sort((a, b) => a - b);
    var helper = function (curSum, cur, index) {
        if (curSum === target) {
            res.push([...cur]);
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            if (i !== index && candidates[i] === candidates[i - 1]) continue;
            if (curSum > target) return;
            cur.push(candidates[i]);
            helper(curSum + candidates[i], cur, i + 1);
            cur.pop();
        }
    };
    helper(0, [], 0);
    return res;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return []
    let res = [];
    pre(root, 0);
    return res;

    function pre(node, h) {
        if (!node) return;
        res[h] = node.val;
        pre(node.left, h + 1)
        pre(node.right, h + 1)
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (N) {
    let len = N.length - 1, curr = -1, next = 0, ans = 0
    for (let i = 0; next < len; i++) {
        if (i > curr) ans++, curr = next
        next = Math.max(next, N[i] + i)
    }
    return ans
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [];
    dfs(nums, [], Array(nums.length).fill(false), res);
    return res;
};

function dfs(letters, path, used, res) {
    if (path.length === letters.length) {
        res.push(Array.from(path));
        return;
    }
    for (let i = 0; i < letters.length; i++) {
        if (used[i]) continue;
        path.push(letters[i]);
        used[i] = true;
        dfs(letters, path, used, res);
        path.pop();
        used[i] = false;
    }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = [], remain = [], set = new Set(nums);
    nums.forEach(num => remain[num] ? remain[num]++ : remain[num] = 1);

    function permute(depth, remain, cur) {
        if (depth === nums.length) {
            res.push(cur.slice())
            return;
        }
        for (let num of set) {
            if (remain[num]) {
                cur.push(num);
                remain[num]--;

                permute(depth + 1, remain, cur);

                cur.pop();
                remain[num]++;
            }
        }
        return res;
    }

    return permute(0, remain, []);
};

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
    const total = matchsticks.reduce((total, length) => total + length);
    if (total % 4 !== 0) return false;

    const SQUARE_LENGTH = total / 4;
    const dp = Array(4).fill(SQUARE_LENGTH);
    const dfs = (pos = 0) => {
        if (pos >= matchsticks.length) {
            const [top, bottom, left, right] = dp;
            return top === 0 && bottom === top && left === top && right === top;
        }

        const match = matchsticks[pos];
        if (match > SQUARE_LENGTH) return false;

        for (let index = 0; index < 4; index++) {
            const side = dp[index];
            if (match > side) continue;
            dp[index] -= match;
            if (dfs(pos + 1)) return true;
            dp[index] = side;
        }
        return false;
    };

    matchsticks.sort((a, b) => b - a);
    return dfs();
};

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const result = [];

    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];

        if (Math.max(interval[0], newInterval[0]) <= Math.min(interval[1], newInterval[1])) {
            newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
            continue;
        }

        if (interval[0] > newInterval[1]) {
            result.push(newInterval, ...intervals.slice(i));
            return result;
        }

        result.push(interval);
    }

    result.push(newInterval);
    return result;
};