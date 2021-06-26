const cache = require('./function-cache');

describe("Solution", function() {
  it("should test for something", function() {
    expect(cache(() => 3)).toBe(3);
  });
});