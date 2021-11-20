/**
 * Kata link: https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
 */
function sumIntervals(intervals) {
    let sum = 0;
    intervals.forEach(interval => {
        console.log(interval)
        sum += interval[1] - interval[0];
    })

    return sum;
}

module.exports = sumIntervals;