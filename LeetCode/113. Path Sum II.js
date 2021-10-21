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
 * @param {number} targetSum
 * @return {number[][]}
*/

const dfs = (currentNode, currentValues, targetSum, result) => {
  if (!currentNode.left && !currentNode.right) {
      currentValues.push(currentNode.val)
      const sum = currentValues.reduce((a, b) => a + b, 0)
      if (sum === targetSum) {
          result.push([...currentValues])
      }
      return
  }
  
  if (currentNode.left) {
      dfs(currentNode.left, [...currentValues, currentNode.val], targetSum, result)
  }
  
  if (currentNode.right) {
      dfs(currentNode.right, [...currentValues, currentNode.val], targetSum, result)
  }
}

var pathSum = function(root, targetSum) {
  const answer = []
  if (root) {
      dfs(root, [], targetSum, answer)
  }
  return answer
};