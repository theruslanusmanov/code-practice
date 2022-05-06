import {convertToTitle} from './excel-sheet-column-title';

describe('#convertToTitle', function() {
  it('should return right answer', function() {
    const output = convertToTitle(1);
    expect(output).toBe("A")
  });

  it('should return right answer', function() {
    const output = convertToTitle(28);
    expect(output).toBe("AB")
  });

  it('should return right answer', function() {
    const output = convertToTitle(701);
    expect(output).toBe("ZY")
  });
});
