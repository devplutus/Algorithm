/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
*/

class Node {
  constructor(value, depth) {
      this.value = value
      this.next = null
      this.depth = depth
  }
}

class CustomQueue {
  constructor() {
      this.head = null
      this.tail = null
      this.size = 0
  }
  
  enqueue(node) {
      if (this.head === null) {
          this.head = this.tail = node
      } else {
          this.tail.next = node
          this.tail = node
      }
      
      this.size += 1
  }
  
  dequeue() {
      if (this.size > 0) {
          const value = this.head
          this.head = this.head.next
          this.size -= 1
          if (this.size === 0) {
              this.head = this.tail = null
          }
          return value
      } else {
          return null   
      }
  }
  
  isEmpty = () => this.size === 0
}

var maxDepth = function(root) {
  if (!root) return 0
  
  let answer = 0
  const queue = new CustomQueue()
  queue.enqueue(new Node(root, 1))
  
  while (!queue.isEmpty()) {
      const next = queue.dequeue()
      const current = next.value
      
      if (current.left) {
          queue.enqueue(new Node(current.left, next.depth + 1))
      }
      if (current.right) {
          queue.enqueue(new Node(current.right, next.depth + 1))
      }
      
      answer = Math.max(answer, next.depth)
  }
  
  return answer
};