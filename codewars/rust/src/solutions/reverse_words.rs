/// Kata link: https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/rust
///
/// # Examples:
/// ```
///   "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
/// ```
pub fn reverse_words(words: &str) -> String {
    let mut iter = words.split(' ').rev();
    std::iter::once(iter.next())
        .chain(iter.flat_map(|word| [" ", word]))
        .collect()
}


#[cfg(test)]
mod tests {
    use crate::reverse_words;

    #[test]
    fn reverse() {
        let str = "The greatest victory is that which requires no battle";
        let reversed_str = "battle no requires which that is victory greatest The";
        assert_eq!(reverse_words(str), reversed_str);
    }
}