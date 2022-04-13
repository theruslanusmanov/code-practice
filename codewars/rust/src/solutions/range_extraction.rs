mod solution {
    pub fn range_extraction(a: &[i32]) -> String {
        let mut range = None;
        let mut parts = vec![];

        for n in a.iter() {
            let n = *n;
            match range {
                None => { range = Some((n, n)) }
                Some((u, v)) if v + 1 == n => { range = Some((u, n)) }
                Some(r) => {
                    range = Some((n, n));
                    parts.push(r)
                }
            }
        }
        range.map(|r| parts.push(r));

        parts.iter().map(|(u, v)| match v - u {
            0 => u.to_string(),
            1 => format!("{},{}", u, v),
            _ => format!("{}-{}", u, v)
        }).collect::<Vec<_>>().join(",")
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example() {
        assert_eq!("-6,-3-1,3-5,7-11,14,15,17-20", solution::range_extraction(&[-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
        assert_eq!("-3--1,2,10,15,16,18-20", solution::range_extraction(&[-3, -2, -1, 2, 10, 15, 16, 18, 19, 20]));
    }
}

