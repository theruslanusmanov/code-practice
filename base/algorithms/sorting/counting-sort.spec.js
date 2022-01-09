import { countingSort } from "./counting-sort";

describe('#countingSort', () => {
  it('should sort array', () => {
    expect(countingSort([])).toEqual([]);
    expect(countingSort([1])).toEqual([1]);
    expect(countingSort([1, 2])).toEqual([1, 2]);
    expect(countingSort([2, 1])).toEqual([1, 2]);
    /*expect(countingSort([3, 4, 2, 1, 0, 0, 4, 3, 4, 2]))
      .toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);*/
  })
})
