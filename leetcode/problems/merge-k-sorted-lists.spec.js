import {mergeKLists} from "./merge-k-sorted-lists";

describe('Solution', () => {
  it('test #1', () => {
    const lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
    const output = [1, 1, 2, 3, 4, 4, 5, 6]
    expect(mergeKLists(lists)).toEqual(output);
  })

  it('test #2', () => {
    const lists = []
    const output = []
    expect(mergeKLists(lists)).toEqual(output);
  })

  it('test #3', () => {
    const lists = [[]]
    const output = []
    expect(mergeKLists(lists)).toEqual(output);
  })
})
