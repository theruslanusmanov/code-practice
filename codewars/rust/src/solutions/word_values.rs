fn word_value(words: &[&str]) -> Vec<i32> {
    words
        .iter()
        .enumerate()
        .map(|(i, word)| {
            (i + 1) as i32 * word.chars()
                .filter(char::is_ascii_alphabetic)
                .fold(0, |sum, c| sum + c as i32 - 96)
        })
        .collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn basic_tests() {
        assert_eq!(word_value(&["abc", "abc", "abc", "abc"]), [6, 12, 18, 24]);
        assert_eq!(word_value(&["codewars", "abc", "xyz"]), [88, 12, 225]);
    }
}

