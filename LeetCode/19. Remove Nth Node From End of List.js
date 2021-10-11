/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  const stack = [head]
  
  while (true) {
      const next = stack[stack.length - 1].next
      if (!next) {
          break
      }
      stack.push(next)
  }
  
  let last = null
  
  for (let i = 0; i < n; i++) {
      last = stack.pop()
  }
  
  if (stack.length) {
      stack[stack.length - 1].next = last.next   
  } else if (head.next) {
      head = head.next
  } else {
      return null
  }
  
  return head
};