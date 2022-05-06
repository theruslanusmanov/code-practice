const Node = function(val, next = null) {
  this.val = val;
  this.next = next;
};

var MyStack = function() {
  this.head = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.head = new Node(x, this.head);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  const removed = this.head;
  this.head = removed.next;
  return removed.val;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.head.val;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.head;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
