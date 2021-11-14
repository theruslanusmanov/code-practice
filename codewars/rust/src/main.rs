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
    println!("Hello, world!");
    valid_braces("(){}[]");
}

fn valid_braces(s: &str) -> bool {
    println!("{}", s);

    let mut opening_braces = Vec::new();
    let mut closing_braces = Vec::new();

    for c in s.chars() {
        match c {
            '{' | '(' | '[' => opening_braces.push(c),
            '}' | ')' | ']' => closing_braces.push(c),
            _ => {}
        }
    }

    println!("{:?}", opening_braces);
    println!("{:?}", closing_braces);

    if opening_braces.len() != closing_braces.len() {
        false
    }

    false
}