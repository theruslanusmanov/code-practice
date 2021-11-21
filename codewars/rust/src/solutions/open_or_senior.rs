/// Kata link: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/rust
fn open_or_senior(data: Vec<(i32, i32)>) -> Vec<String> {
    let mut output: Vec<String> = Vec::new();

    for (age, handicaps) in data {
        if age >= 55 && handicaps > 7 {
            output.push(String::from("Senior"))
        } else {
            output.push(String::from("Open"))
        }
    }

    output
}

#[cfg(test)]
mod tests {
    use crate::solutions::open_or_senior::open_or_senior;

    #[test]
    fn returns_expected() {
        assert_eq!(open_or_senior(vec![(45, 12), (55,21), (19, -2), (104, 20)]), vec!["Open", "Senior", "Open", "Senior"]);
        assert_eq!(open_or_senior(vec![(3, 12), (55,1), (91, -2), (54, 23)]), vec!["Open", "Open", "Open", "Open"]);
    }
}