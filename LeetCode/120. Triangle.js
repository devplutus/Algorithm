/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
  const sum = [[triangle[0][0]]]
  for (let i = 1; i < triangle.length; i++) {
      const newSum = []
      for (let j = 0; j < triangle[i].length; j++) {
          if (j === 0) {
              newSum.push(sum[i-1][0] + triangle[i][j])
          } else if (j === triangle[i].length - 1) {
              newSum.push(sum[i-1][sum[i-1].length - 1] + triangle[i][j])
          } else {
              newSum.push(Math.min(sum[i-1][j-1], sum[i-1][j]) + triangle[i][j])
          }
      }
      sum.push(newSum)
  }
  
  return Math.min(...sum[sum.length-1])
};