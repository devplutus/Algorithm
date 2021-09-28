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

var addTwoNumbers = function(l1, l2) {
  const answer = []
  let prev = 0
  while (l1 || l2) {
      const l1val = l1 ? l1.val : 0
      const l2val = l2 ? l2.val : 0
      
      let sum = l1val + l2val + prev
      
      if (sum >= 10) {
          prev = 1
          sum -= 10
      } else {
          prev = 0
      }
      
      if (l1) l1 = l1.next
      if (l2) l2 = l2.next
      
      answer.push(sum)
  }
  
  if (prev === 1) answer.push(1)
  
  const result = new ListNode(answer[0], null)
  prev = result
  for (let i = 1; i < answer.length; i++) {
      const next = new ListNode(answer[i], null)
      prev.next = next
      prev = next
  }
  
  return result
};