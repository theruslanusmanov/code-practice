/// Kata link: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/rust
///
/// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.
pub fn get_count(string: &str) -> usize {
    let mut vowels_count: usize = 0;

    for s in string.chars() {
        match s {
            'a' | 'e' | 'i' | 'o' | 'u' => vowels_count += 1,
            _ => {}
        }
    }

    vowels_count
}

#[cfg(test)]
mod tests {
    use crate::solutions::vowels_count::get_count;

    #[test]
    fn my_tests() {
        assert_eq!(get_count("abracadabra"), 5);
    }
}