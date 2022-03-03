import {linkedList, ListNode} from '../structures/linked-list';
import {getIntersectionNode} from './intersection-of-two-linked-lists';

describe('Intersection of Two Linked Lists', () => {
  it('test 1', () => {
    const intersectVal = 2,
        listA = linkedList([1, 9, 1, 2, 4]),
        listB = linkedList([3, 2, 4]),
        output = new ListNode(2);

    expect(getIntersectionNode(listA, listB)).toStrictEqual(output);
  });
});
