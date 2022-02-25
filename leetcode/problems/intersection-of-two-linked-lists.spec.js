import {ListNode} from '../structures/linked-list';
import {getIntersectionNode} from './intersection-of-two-linked-lists';

describe('Intersection of Two Linked Lists', () => {
  it('test 1', () => {
    const intersectVal = 2,
        listA = [1, 9, 1, 2, 4],
        listB = [3, 2, 4],
        skipA = 3,
        skipB = 1,
        output = new ListNode();

    const result = getIntersectionNode(listA, listB);

    expect(result).toEqual(output);
  });
});
