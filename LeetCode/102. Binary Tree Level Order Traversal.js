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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if (!root) return []
  const answer = []
  const queue = [[root, 0]]
  
  while (queue.length) {
      const [current, index] = queue.shift()
      
      if (!answer[index]) answer.push([current.val])
      else answer[index].push(current.val)
      
      if (current.left) queue.push([current.left, index + 1])
      if (current.right) queue.push([current.right, index + 1])
  }
  return answer
};