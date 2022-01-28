const LinkedList = require("./util/linked-list-x");

var findKthToLast = function(k, list) {
  let fast = list.head;
  let slow = list.head;

  for (let i = 0; i < k; i++) {
    if (fast === null) return null;
    fast = fast.next;
  }

  while(fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};


/* TESTS */
let l = new LinkedList();
l.append(1)
l.append(2)
l.append(3)
l.append(4)
l.append(5)



console.log(findKthToLast(3, l));

console.log(findKthToLast(10, l));

console.log(findKthToLast(-1, l));

console.log(findKthToLast(0, l));

console.log(findKthToLast(1, l));
