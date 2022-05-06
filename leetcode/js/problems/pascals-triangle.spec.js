import {generate} from "./pascals-triangle";

describe(`Pascal's triangle`, () => {
  it('should be right output', () => {
    const input = 5;
    const output = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

    expect(generate(input)).toStrictEqual(output);
  })
})
