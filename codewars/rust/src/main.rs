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
    let result = valid_braces("(){}[]");
    println!("{}", result);
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

    closing_braces.reverse();

    println!("{:?}", opening_braces);
    println!("{:?}", closing_braces);

    if opening_braces.len() != closing_braces.len() {
        return false;
    }

    let mut count: i32 = 0;


    for it in opening_braces.iter().zip(closing_braces.iter()) {
        match it {
            ('{', '}') => {
                count += 1;
            },
            ('(', ')') => {
                count += 1;
            },
            ('[', ']') => {
                count += 1;
            },
            (_, _) => count -= 1
        }
    }

    if count == opening_braces.len() as i32 {
        return true;
    }

    false
}