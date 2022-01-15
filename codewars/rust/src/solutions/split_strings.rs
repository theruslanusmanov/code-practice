fn split_strings(s: &str) -> Vec<String> {
    s.chars()
        .collect::<Vec<_>>()
        .chunks(2)
        .map(|v| {
            if v.len() == 1 {
                format!("{}_", v[0])
            } else {
                v.into_iter().collect()
            }
        })
        .collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn basic() {
        assert_eq!(split_strings("abcdef"), ["ab", "cd", "ef"]);
        assert_eq!(split_strings("abcdefg"), ["ab", "cd", "ef", "g_"]);
        assert_eq!(split_strings(""), [] as [&str; 0]);
    }
}

