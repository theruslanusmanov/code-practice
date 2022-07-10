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
