/**
 * Kata link: https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
 */
function sumIntervals(intervals) {
    let sum = [];
    intervals.forEach(e => {
        for (let i = e[0]; i < e[1]; i++) {
            sum.push(i);
        }
    });
    sum = [...new Set(sum)]
    return sum.length;
}

module.exports = sumIntervals;