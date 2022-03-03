export function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Explanation https://stackoverflow.com/questions/49471775/how-to-make-a-linked-list-from-an-array-in-javascript
 * @param arr
 * @returns {ListNode}
 */
export function linkedList(arr) {
  let list = new ListNode(arr[0]);

  let selectedNode = list;
  for (let i = 1; i < arr.length; i++) {
    selectedNode.next = new ListNode(arr[i]);
    selectedNode = selectedNode.next
  }

  return list
}
