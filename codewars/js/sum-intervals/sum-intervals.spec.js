const sumIntervals = require('./sum-intervals');

describe('sumIntervals', function(){
  it('should return the correct sum for non overlapping intervals', function(){
    const test1 = [[1,5]];
    const test2 = [[1,5],[6,10]];
    expect(sumIntervals(test1)).toBe(4);
    expect(sumIntervals(test2)).toBe(8);
  });

  it('should return the correct sum for overlapping intervals', function(){
    const test1 = [[1,5],[1,5]];
    const test2 = [[1,4],[7, 10],[3, 5]];
    expect(sumIntervals(test1)).toBe(4);
    expect(sumIntervals(test2)).toBe(7);
  });
});