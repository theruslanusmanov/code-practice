/// Kata link: https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/rust
///
/// # Examples:
/// ```
///   "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
/// ```
pub fn reverse_words(words: &str) -> String {
    // 1. Split string into words.
    let split_words = words.split(' ');
    for s in split_words {
        println!("{}", s);
        // 2. Reverse each word.
        s.chars().rev().collect::<String>();
    }

    words.to_string()
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