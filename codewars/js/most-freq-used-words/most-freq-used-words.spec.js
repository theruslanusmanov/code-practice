const topThreeWords = require('./most-freq-used-words');

describe("Tests", () => {

  it("test", () => {
    expect(topThreeWords("a a a  b  c c  d d d d  e e e e e")).toStrictEqual(['e', 'd', 'a'])
    expect(topThreeWords("a a c b b")).toStrictEqual(['a', 'b', 'c'])
    expect(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")).toStrictEqual(['e', 'ddd', 'aa'])
    expect(topThreeWords("  //wont won't won't ")).toStrictEqual(["won't", "wont"])
    expect(topThreeWords("  , e   .. ")).toStrictEqual(["e"])
    expect(topThreeWords("  ...  ")).toStrictEqual([])
    expect(topThreeWords("  '  ")).toStrictEqual([])
    expect(topThreeWords(
      `In a village of La Mancha, the name of which I have no desire to call to
      mind, there lived not long since one of those gentlemen that keep a lance
      in the lance-rack, an old buckler, a lean hack, and a greyhound for
      coursing. An olla of rather more beef than mutton, a salad on most
      nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
      on Sundays, made away with three-quarters of his income.`
    )).toStrictEqual(['a', 'of', 'on'])
  })
});
