pub fn get_row(row_index: i32) -> Vec<i32> {
    let row_index = row_index as usize;
    let mut res = vec![];
    res.push(1);

    for i in 1..row_index + 1 {
        let tmp = res[i - 1] as usize * (row_index + 1 - i) / i;
        res.push(tmp as i32);
    }

    res
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example() {
        assert_eq!(get_row(0), [1]);
        assert_eq!(get_row(1), [1,1]);
        assert_eq!(get_row(3), [1,3,3,1]);
    }
}

