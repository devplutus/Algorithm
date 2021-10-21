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

 var maxPathSum = function(root) {
  let answer = -10000
  
  const dfs = (current) => {
      const left = current.left ? dfs(current.left) : 0
      const right = current.right ? dfs(current.right) : 0
      answer = Math.max(answer, left + right + current.val, Math.max(left, right) + current.val, current.val)
      return Math.max(Math.max(left, right) + current.val, current.val)
  }
  dfs(root)
  return answer
};

/*
- 후위 순회 -
자식 노드에서 올라오지 못하기 떄문에 자식들의 최대 값을 가져온다.
Condition : 자기 자신, 자식들 중 제일 큰 값과 자기 자신의 값, 자식들과 자신의 값 중 제일 큰 값이 답
Return : 자신의 값 또는 자식들 중 제일 큰 값의 합 중 제일 큰 값을 올려준다.

*/