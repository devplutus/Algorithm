/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 const dfs = (current, currentDepth, depth) => {
  if (current) {
      depth[currentDepth].push(current)
      if (current.left && current.right) {
          dfs(current.left, currentDepth + 1, depth)
          dfs(current.right, currentDepth + 1, depth)
      }
  }
  
}
var connect = function(root) {
  const depth = Array(13).fill(0).map(() => [])
  dfs(root, 0, depth)
  for (let i = 0; i < depth.length; i++) {
      for (let j = 0; j < depth[i].length - 1; j++) {
          depth[i][j].next = depth[i][j + 1]
      }
  }
  return root
};