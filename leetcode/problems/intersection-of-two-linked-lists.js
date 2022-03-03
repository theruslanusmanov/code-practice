/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
export const getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let head1 = headA;
  let head2 = headB;

  while (head1 !== head2) {
    head1 = head1.next;
    head2 = head2.next;

    if (head1 === head2) {
      return head1;
    }

    if (!head1) {
      head1 = headB;
    }

    if (!head2) {
      head2 = headA;
    }
  }

  return head1;
};
