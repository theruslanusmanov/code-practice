/// Kata: https://www.codewars.com/kata/514b92a657cdc65150000006/train/rust
fn multiple_of_3_or_5(num: i32) -> i32 {
    let mut sum: i32 = 0;
    let mut dividable_nums: Vec<i32> = vec![];

    if num < 0 {
        return sum;
    }

    for i in 1..num {
        if i % 3 == 0 || i % 5 == 0 {
            dividable_nums.push(i);
        }
    }

    sum = dividable_nums.iter().sum();

    println!("Dividable nums: {:?}", dividable_nums);
    println!("Summary: {}", sum);

    sum
}

#[cfg(test)]
mod tests {
    use crate::solutions::multiple_of_3_or_5::multiple_of_3_or_5;

    #[test]
    fn returns_expected() {
        assert_eq!(multiple_of_3_or_5(10), 23);
        assert_eq!(multiple_of_3_or_5(11), 33);
        assert_eq!(multiple_of_3_or_5(6), 8);
    }
}
