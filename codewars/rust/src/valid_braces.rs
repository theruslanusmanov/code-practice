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

