/// Kata link: https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/rust
///
/// # Examples:
/// ```
///   "(){}[]"   =>  True
///   "([{}])"   =>  True
///   "(}"       =>  False
///   "[(])"     =>  False
///   "[({})](]" =>  False
/// ```
#[allow(dead_code)]
pub fn valid_braces(s: &str) -> bool {
    let mut stack = Vec::new();

    for c in s.chars() {
        if stack.len() > 0 {
            if stack.last() == Some(&'(') && c == ')' {
                stack.pop();
                continue;
            }
            if stack.last() == Some(&'{') && c == '}' {
                stack.pop();
                continue;
            }
            if stack.last() == Some(&'[') && c == ']' {
                stack.pop();
                continue;
            }
        }

        stack.push(c);
    }

    if stack.len() == 0 {
        return true;
    }

    false
}

#[cfg(test)]
mod tests {
    use super::valid_braces;

    #[test]
    fn exploration() {
        assert_eq!(2 + 2, 4);
    }

    #[test]
    fn basic_tests() {
        assert_eq!(valid_braces("()"), true);
        assert_eq!(valid_braces("[(])"), false);
    }
}