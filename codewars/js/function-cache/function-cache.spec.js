const cache = require('./function-cache');

describe("Solution", function() {
  it("should test for something", function() {
    const exampleFn = (a, b) => a + b;
    const cachedFn = cache(exampleFn);
    expect(cachedFn(1, 2)).toBe(3);
    expect(cachedFn(1, 2)).toBe(3);
    expect(cachedFn(1, 3)).toBe(4);
  });
});