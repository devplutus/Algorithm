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
 var sumNumbers = function(root) {
  let answer = 0
  
  const queue = [[root, '']]
  
  while (queue.length) {
      const [current, value] = queue.shift()
      
      if (!current.left && !current.right) {
          answer += parseInt(value + current.val)
          continue
      }
      
      if (current.left) {
          queue.push([current.left, value + current.val])
      }
      
      if (current.right) {
          queue.push([current.right, value + current.val])
      }
  }
  
  return answer
};