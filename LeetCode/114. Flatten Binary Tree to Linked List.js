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
 * @return {void} Do not return anything, modify root in-place instead.
 */

 const preOrder = (currentNode, result) => {
  if (currentNode) {
      result.push(currentNode)
      if (currentNode.left) preOrder(currentNode.left, result)
      if (currentNode.right) preOrder(currentNode.right, result)
  }
}

var flatten = function(root) {
  const answer = []
  preOrder(root, answer)
  for (let i = 0; i < answer.length - 1; i++) {
      answer[i].left = null
      answer[i].right = answer[i+1]
  }
  
  return root
};