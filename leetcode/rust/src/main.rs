use std::collections::HashMap;

mod solutions;

fn main() {
    reverse_words("The greatest victory is that which requires no battle");
}

pub fn combination_sum(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    fn backtrack(sub: &[i32], candidates: &[i32], target: i32, res: &mut Vec<Vec<i32>>) {
        let sum = sub.iter().sum::<i32>();
        if sum == target {
            res.push(sub.to_vec());
            return;
        } else if sum > target {
            return;
        }

        for (i, v) in candidates.iter().enumerate() {
            let mut s = sub.to_vec();
            s.push(*v);
            backtrack(&s, &candidates[i..], target, res);
        }
    }

    let mut res: Vec<Vec<i32>> = vec![];
    backtrack(&vec![], &candidates, target, &mut res);

    res
}

pub fn min_cost_climbing_stairs(cost: Vec<i32>) -> i32 {
    let len = cost.len();
    // pprev that holds the cost to reach n-2 stair case
    let mut pprev = cost[0];
    // prev that holds the cost to reach n-1(prev) stair case
    let mut prev = cost[1];

    for stair in 2..len {
        // the min cost to reach the current stair = current cost + min (min cost to reach n-1, min cost to reach n-2)
        let next_prev = cost[stair] + pprev.min(prev);
        // updating new states
        pprev = prev;
        prev = next_prev
    }
    // result = min cost of reaching n-1 step and n-2
    pprev.min(prev)
}

pub fn multiply(num1: String, num2: String) -> String {
    let len1 = num1.len();
    let len2 = num2.len();
    let digits = {
        let mut digits = vec![0; len1 + len2];
        for (idx1, ch1) in num1.chars().rev().enumerate() {
            for (idx2, ch2) in num2.chars().rev().enumerate() {
                let n1 = ch1 as i32 - '0' as i32;
                let n2 = ch2 as i32 - '0' as i32;
                let res = n1 * n2 + digits[idx1 + idx2];
                digits[idx1 + idx2] = res % 10;
                digits[idx1 + idx2 + 1] += res / 10;
            }
        }
        while digits.len() > 1 && digits.last() == Some(&0) {
            digits.pop();
        }
        digits
    };
    digits.into_iter().rev().map(|d| d.to_string()).collect::<String>()
}

pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
    let mut h = std::collections::HashMap::new();

    for s in strs {
        let mut key: Vec<char> = s.chars().collect();
        key.sort();
        h.entry(key).or_insert(vec![]).push(s);
    }

    h.values().cloned().collect()
}

pub fn my_pow(x: f64, n: i32) -> f64 {
    if n == 0 {
        return 1.0;
    }
    if n % 2 == 0 {
        my_pow(x, n / 2) * my_pow(x, n / 2)
    } else {
        if n > 0 {
            x * my_pow(x, n / 2) * my_pow(x, n / 2)
        } else {
            (my_pow(x, n / 2) * my_pow(x, n / 2)) / x
        }
    }
}

pub fn can_jump(nums: Vec<i32>) -> bool {
    let mut n = 1;
    for i in (0..nums.len() - 1).rev() {
        n = if nums[i] < n { n + 1 } else { 1 };
    }
    n == 1
}

pub fn merge(intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    if intervals.is_empty() {
        return vec![];
    }

    let mut intervals = intervals;
    let mut res: Vec<Vec<i32>> = vec![];

    intervals.sort();

    let mut last = intervals[0].clone();

    for item in intervals.into_iter() {
        if item[0] > last[1] {
            res.push(last);
            last = item;
        } else {
            last[1] = item[1].max(last[1]);
        }
    }

    res.push(last);
    res
}