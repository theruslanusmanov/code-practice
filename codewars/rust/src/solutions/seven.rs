fn seven(n: i64) -> (i64, i32) {
    let mut steps = 0;
    let mut n = n;

    while n >= 100 {
        steps += 1;
        n = n / 10 - n % 10 * 2;
    }

    (n, steps)
}

#[cfg(test)]
mod tests {
    use super::*;

    fn dotest(n: i64, exp: (i64, i32)) -> () {
        println!(" n: {:?};", n);
        let ans = seven(n);
        println!(" actual:\n{:?};", ans);
        println!("expect:\n{:?};", exp);
        println!(" {};", ans == exp);
        assert_eq!(ans, exp);
        println!("{};", "-");
    }

    #[test]
    fn basic_tests() {
        dotest(477557101, (28, 7));
        dotest(477557102, (47, 7));
        dotest(1603, (7, 2));

    }
}
