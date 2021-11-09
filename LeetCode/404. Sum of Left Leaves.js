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
 var sumOfLeftLeaves = function(root) {
  let answer = 0
  const queue = [[root, false]]
  
  while(queue.length) {
      const [current, isLeft] = queue.shift()
      
      if (current.left) {
          queue.push([current.left, true])
      }
      
      if (current.right) {
          queue.push([current.right, false])
      }
      
      if (!current.left && !current.right && isLeft) {
          answer += current.val
      }
  }
  
  return answer
};