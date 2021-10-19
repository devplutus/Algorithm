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

 const dfs = (current, result) => {
  if (result[0] === false) return 0
  if (!current.left && !current.right) {
      return 1
  }
  
  let left = 0
  let right = 0
  
  if (current.left) {
      left += dfs(current.left, result)
  }
  
  if (current.right) {
      right += dfs(current.right, result)
  }
  
  if (Math.abs(left - right) > 1) result[0] = false
  
  return Math.max(left + 1, right + 1)
}

var isBalanced = function(root) {
  if (!root) return true
  const result = [true]
  dfs(root, result)
  return result[0]
};