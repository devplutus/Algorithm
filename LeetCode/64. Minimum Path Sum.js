/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
  const m = grid.length
  const n = grid[0].length
  const sum = Array(m).fill(0).map(() => Array(n).fill(0))
  
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (i - 1 >= 0 && j - 1 >= 0) {
              sum[i][j] = Math.min(sum[i-1][j], sum[i][j-1]) + grid[i][j]
          } else if (i - 1 >= 0) {
              sum[i][j] += sum[i-1][j] + grid[i][j]
          } else if (j - 1 >= 0) {
              sum[i][j] += sum[i][j-1] + grid[i][j]
          } else {
              sum[i][j] = grid[i][j]
          }
      }
  }
  
  return sum[m-1][n-1]
};