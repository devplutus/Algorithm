/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const board = Array(m).fill(0).map(() => Array(n).fill(0))
  if (obstacleGrid[0][0] === 0) board[0][0] = 1
  
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (obstacleGrid[i][j] === 1) continue
          
          if (i - 1 >= 0 && j - 1 >= 0 && obstacleGrid[i][j] !== 1) {
              board[i][j] = board[i-1][j] + board[i][j-1]
          } else if (i - 1 >= 0 && obstacleGrid[i-1][j] !== 1) {
              board[i][j] = board[i-1][j]
          } else if (j - 1 >= 0 && obstacleGrid[i][j-1] !== 1) {
              board[i][j] = board[i][j-1]
          }
      }
  }
  
  return board[m-1][n-1]
};