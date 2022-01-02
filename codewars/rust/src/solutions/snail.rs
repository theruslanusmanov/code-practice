// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/rust


fn one_layer(n: usize, layer: usize) -> impl Iterator<Item = (usize, usize)> {
    let left_right = (layer..n - layer).map(move |i| (layer, i));
    let up_down = (layer + 1..n - layer).map(move |i| (i, n - 1 - layer));
    let right_left = (layer..n - 1 - layer).rev().map(move |i| (n - 1 - layer, i));
    let down_up = (layer + 1..n - 1 - layer).rev().map(move |i| (i, layer));

    left_right.chain(up_down).chain(right_left).chain(down_up)
}

pub fn snail(matrix: &[Vec<i32>]) -> Vec<i32> {
    let n = matrix.get(0).map(|xs| xs.len()).unwrap_or(0);
    (0..n)
        .flat_map(|x| one_layer(n, x))
        .map(|(x, y)| matrix[x][y])
        .collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn sample_test1() {
        let square = &[
            vec![1,2,3],
            vec![4,5,6],
            vec![7,8,9],
        ];
        let expected = vec![1,2,3,6,9,8,7,4,5];
        assert_eq!(snail(square), expected);
    }

    #[test]
    fn sample_test2() {
        let square = &[
            vec![1,2,3],
            vec![8,9,4],
            vec![7,6,5],
        ];
        let expected = vec![1,2,3,4,5,6,7,8,9];
        assert_eq!(snail(square), expected);
    }

    #[test]
    fn sample_test3() {
        let square: &[Vec<i32>; 1] = &[Vec::new()];
        let expected = Vec::new();
        assert_eq!(snail(square), expected, "Failed with empty input");
    }

    #[test]
    fn sample_test4() {
        let square = &[vec![1]];
        let expected = vec![1];
        assert_eq!(snail(square), expected);
    }
}
