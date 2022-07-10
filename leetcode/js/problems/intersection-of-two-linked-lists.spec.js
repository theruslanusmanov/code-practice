import {linkedList} from '../structures/linked-list';
import {getIntersectionNode} from './intersection-of-two-linked-lists';

describe('Intersection of Two Linked Lists', () => {
  it('test 1', () => {
    const intersectVal = 2,
        listA = linkedList([1, 9, 1, 2, 4]),
        listB = linkedList([3, 2, 4]);
    expect(getIntersectionNode(listA, listB).val).toEqual(intersectVal);
  });

  it('test 2', () => {
    const intersectVal = 0,
      listA = linkedList([2,6,4]),
      listB = linkedList([1,5]);
    expect(getIntersectionNode(listA, listB).val).toEqual(intersectVal);
  });
});
