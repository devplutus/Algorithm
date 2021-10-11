/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function check(linkedList, arr) {
  while (true) {
      if (linkedList.next) {
          arr.push(linkedList.val)
          linkedList = linkedList.next
      } else {
          arr.push(linkedList.val)
          break
      }
  }
}

var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return null
  else if (!l1 || !l2) return !l1 ? l2 : l1
  
  let arr = []
  check(l1, arr)
  check(l2, arr)
  arr.sort((a, b) => a - b)
  
  const answer = new ListNode(arr[0])
  let next = new ListNode(arr[1])
  answer.next = next
  
  for (let i = 2; i < arr.length; i++) {
      const current = new ListNode(arr[i])
      next.next = current
      next = next.next
  }
  
  return answer
};