import {calculate} from "./basic-calculator";

describe('calculate', function () {
  it('should equal', () => {
    const s = "1 + 1";
    expect(calculate(s)).toBe(2);
  })

  it('should equal', () => {
    const s = " 2-1 + 2 ";
    expect(calculate(s)).toBe(3);
  })

  it('should equal', () => {
    const s = "(1+(4+5+2)-3)+(6+8)";
    expect(calculate(s)).toBe(23);
  })
});
