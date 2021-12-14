const sortTheOdd = require('./sort-the-odd');

describe("#sortTheOdd", function() {

  it("test", function() {
    expect(sortTheOdd([5, 3, 2, 8, 1, 4])).toStrictEqual([1, 3, 2, 8, 5, 4]);
    expect(sortTheOdd([5, 3, 1, 8, 0])).toStrictEqual([1, 3, 5, 8, 0]);
    expect(sortTheOdd([])).toStrictEqual([]);
  });
});
