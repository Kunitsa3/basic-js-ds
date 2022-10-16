const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( l, k ) {
  // let head = l
  // let previous = null

  // while(l){
  //   if(l.value === k){
  //     if(previous===null){
  //       head = l = l.next
  //       continue
  //     } else {
  //       previous.next = l.next
  //       l = l.next
  //       continue
  //     }
  //   }
  //   previous = l
  //   l = l.next
  // }
  // return head

  let result = l;

  const remove = (current, prev) => {
    console.log(current);
    if (current.value === k && !prev) {
      result = current.next;
      return remove(current.next);
    }
    if (current.value === k && !current.next) {
      prev.next = null;
      return result;
    }
    if (current.value === k) {
      prev.next = current.next;
      return remove(current.next, prev);
    }
    if (current.next === null) {
      return result;
    }

    return remove(current.next, current)
  };

  return remove(l);
}

module.exports = {
  removeKFromList
};

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}


function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}


const initial = convertArrayToList([1, 2, 3]);

console.log(removeKFromList(initial, 3));
console.log(initial);