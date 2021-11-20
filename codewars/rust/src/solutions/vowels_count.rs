/// Kata link: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/rust
///
/// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.
pub fn get_count(string: &str) -> usize {
    let mut vowels_count: usize = 0;

    // Do your magic here

    vowels_count
}

#[cfg(test)]
mod tests {
    use super::get_count;

    #[test]
    fn my_tests() {
        assert_eq!(get_count("abracadabra"), 5);
    }
}