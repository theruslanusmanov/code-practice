var LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

var partition = function(head, partition) {
  var left;
  var middle;
  var right;
  var currLeft = null;
  var currMiddle = null;
  var currRight = null;

  var node = head;
  while (node !== null) {
    if (node.value < partition) {
      if (currLeft === null) {
        left = node;
        currLeft = left;
      } else {
        currLeft.next = node;
        currLeft = currLeft.next;
      }
    } else if (node.value === partition) {
      if (currMiddle === null) {
        middle = node;
        currMiddle = middle;
      } else {
        currMiddle.next = node;
        currMiddle = currMiddle.next;
      }
    } else {
      if (currRight === null) {
        right = node;
        currRight = right;
      } else {
        currRight.next = node;
        currRight = currRight.next;
      }
    }
    node = node.next;
  }
  currRight.next = null;
  currLeft.next = middle;
  currMiddle.next = right;
  return left;
}

/* TESTS */
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 2 -> 1 -> 5 -> 5 -> 8 -> 10

var printList = function(a) {
  while (a !== null) {
    console.log(a.value);
    a = a.next;
  }
};

var a = new LinkedList(3);
var b = new LinkedList(5);
var c = new LinkedList(8);
var d = new LinkedList(5);
var e = new LinkedList(10);
var f = new LinkedList(2);
var g = new LinkedList(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

var newa = partition(a, 5);
printList(newa);
