mod valid_braces;

use valid_braces::valid_braces;

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
    valid_braces("(){}[]");
}