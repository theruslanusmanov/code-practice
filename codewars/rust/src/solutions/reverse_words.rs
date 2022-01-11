/// Kata link: https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/rust
///
/// # Examples:
/// ```
///   "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
/// ```
fn reverse_words(words: &str) -> String {
    return words.split_whitespace()
        .rev()
        .collect::<Vec<_>>()
        .join(" ");
}


#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn reverse() {
        let str = "The greatest victory is that which requires no battle";
        let reversed_str = "battle no requires which that is victory greatest The";
        assert_eq!(reverse_words(str), reversed_str);
    }
}
