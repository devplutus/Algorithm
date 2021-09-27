/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 function dfs(p, q) {
  if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false
  if (!p && !q) return true
  
  return dfs(p.left, q.left) && dfs(p.right, q.right)
}

var isSameTree = function(p, q) {
  return dfs(p, q)
};