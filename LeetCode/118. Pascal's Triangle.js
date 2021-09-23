/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  const answer = [[1]]
  
  for (let i = 1; i < numRows; i++) {
      const next = [1]
      for (let j = 1; j < answer[i-1].length; j++) {
          next.push(answer[i-1][j-1] + answer[i-1][j])
      }
      next.push(1)
      answer.push(next)
  }
  
  return answer
};