/// # Description
///
/// A phrase is a palindrome if, after converting all uppercase letters into
/// lowercase letters and removing all non-alphanumeric characters, it reads
/// the same forward and backward. Alphanumeric characters include letters and numbers.
///
/// Given a string s, return true if it is a palindrome, or false otherwise.
///
/// See [`Valid palindrome problem`](https://leetcode.com/problems/valid-palindrome/)
pub fn is_palindrome(s: String) -> bool {
    let iter = s
        .chars()
        .filter(|c| c.is_alphanumeric())
        .map(|c| c.to_ascii_lowercase());

    iter.clone().eq(iter.rev())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_1() {
        let str: String = String::from("A man, a plan, a canal: Panama");
        assert_eq!(is_palindrome(str), true);
    }

    #[test]
    fn test_2() {
        let str: String = String::from("race a car");
        assert_eq!(is_palindrome(str), false);
    }

    #[test]
    fn test_3() {
        let str: String = String::from(" ");
        assert_eq!(is_palindrome(str), true);
    }
}
