/// # Description
///
/// Given a string columnTitle that represents the column title as appears
/// in an Excel sheet, return its corresponding column number.
///
/// For example:
/// ```
/// A -> 1
/// B -> 2
/// C -> 3
/// ...
/// Z -> 26
/// AA -> 27
/// AB -> 28
/// ...
/// ```
///
/// See [`Leetcode: 171. Excel Sheet Column Number`](https://leetcode.com/problems/excel-sheet-column-number/)
pub fn title_to_number(column_title: String) -> i32 {
    column_title
        .chars()
        .map(|c| c as i32 - 'A' as i32 + 1)
        .fold(0, |prev, next| prev * 26 + next)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests() {
        assert_eq!(title_to_number(String::from("A")), 1);
        assert_eq!(title_to_number(String::from("AB")), 28);
        assert_eq!(title_to_number(String::from("ZY")), 701);
    }
}
