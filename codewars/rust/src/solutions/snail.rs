// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/rust


fn snail(matrix: &[Vec<i32>]) -> Vec<i32> {
    let mut matrixClone = matrix.clone();
    let mut finalArray: Vec<i32> = vec![];
    while matrixClone.len() > 0 {
        let el: i32 = *matrixClone.get(0).unwrap().get(0).unwrap();
        finalArray.push(el)
        *matrixClone.get(0).unwrap().remove(0);

        matrixClone.iter().map(|mut row| finalArray.push(row.pop().unwrap()));
        matrixClone.reverse();
        matrixClone.iter().map(|mut row| row.reverse())
    }
    finalArray
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
