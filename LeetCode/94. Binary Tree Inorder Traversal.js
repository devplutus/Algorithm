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
 * @return {number[]}
 */

 function dfs(current, result) {
  if (current.left) dfs(current.left, result) 
  result.push(current.val)
  if (current.right) dfs(current.right, result) 
}

var inorderTraversal = function(root) {
  // Inorder = Root => Left => Right
  const answer = []
  if (!root) return []
  dfs(root, answer)
  
  return answer
};