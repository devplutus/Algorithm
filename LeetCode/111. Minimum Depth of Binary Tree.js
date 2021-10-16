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
 var minDepth = function(root) {
  if (!root) return 0
  
  let answer = Number.MAX_SAFE_INTEGER
  const queue = [[root, 1]]
  
  while(queue.length) {
      const [current, depth] = queue.shift()
      
      if (!current.left && !current.right) {
          answer = Math.min(answer, depth)
          continue
      }
      
      if (current.left) {
          queue.push([current.left, depth + 1])
      }
      if (current.right) {
          queue.push([current.right, depth + 1])
      }
  }
  
  return answer
};