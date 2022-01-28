// a new implementation of the linked list
/*
ADT:
# Main operations
prepend(value)        -> Add a node in the beginning
append(value)         -> Add a node in the end
pop()                 -> Remove a node from the end
popFirst()            -> Remove a node from the beginning
head()                -> Return the first node
tail()                -> Return the last node
remove(Node)*         -> Remove Node from the list
*/

// NOTE: no type-safety

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  pop() {
    let cur = this.head;

    if (!cur) return null;
    if (!cur.next) {
      this.head = null;
      return cur;
    }
    while (cur.next.next) {
      cur = cur.next;
    }

    let last = this.tail;
    this.tail = cur;
    this.tail.next = null;
    return last;
  }

  popFirst() {
    let first = this.head;
    if (this.head && this.head.next) {
      this.head = this.head.next;
      first.next = null;
    } else {
      this.head = null;
    }
    return first;
  }

  head() {
    return this.head;
  }

  removeAt(index) {
    let i = 0;
    let cur = this.head;
    let prev = null;

    while (cur != null) {
      if (i == index) {
        if (prev == null) {
          this.head = cur.next;
        } else {
          prev.next = cur.next;
        }
        cur.next = null;
        return cur.value;
      } else {
        prev = cur;
        cur = cur.next;
        i++;
      }
    }

    return null;
  }

  insertAt(index, value) {
    if (index === 0) return this.prepend(value);
    let cur = this.head;
    let i = 0;

    while (cur != null) {
      if (i === index - 1) {
        let node = new Node(value);
        node.next = cur.next;
        cur.next = node;
        return true;
      } else {
        i++;
        cur = cur.next;
      }
    }
    return false;
  }

  tail() {
    return this.tail;
  }

  _toArray() {
    let arr = [];
    let cur = this.head;
    while (cur) {
      arr.push(cur.value);
      cur = cur.next;
    }

    return arr;
  }
}

module.exports = LinkedList;
