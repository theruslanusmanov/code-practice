/**
    Kata link: https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/rust
    Examples: `
      "(){}[]"   =>  True
      "([{}])"   =>  True
      "(}"       =>  False
      "[(])"     =>  False
      "[({})](]" =>  False
    `
**/
fn main() {
    let result = valid_braces2("(){}[]");
    println!("{}", result);
}

fn valid_braces(s: &str) -> bool {
    println!("{}", s);

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

    println!("{:?}", stack);

    if stack.len() == 0 {
        return true;
    }

    false
}