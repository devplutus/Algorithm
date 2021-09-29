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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
  if ((!root.left && root.right) || (root.left && !root.right)) return false
  else if (!root.left && !root.right) return true
  
  const queue = [[root.left, root.right]]
  
  while (queue.length) {
      const [left, right] = queue.shift()
      
      if (left.val !== right.val || 
          ((!left.left && right.right) || (left.left && !right.right)) || 
          ((!left.right && right.left) || (left.right && !right.left))) {
          return false
      } 
      
      if (left.left && right.right) {
          queue.push([left.left, right.right])
      }
      
      if (left.right && right.left) {
          queue.push([left.right, right.left])
      }
  }
  
  return true
};