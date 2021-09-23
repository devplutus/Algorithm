/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
  const board = Array(m).fill(0).map(() => Array(n).fill(0))
  board[0][0] = 1
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (i - 1 >= 0 && j - 1 >= 0) {
              board[i][j] += board[i-1][j] + board[i][j-1]
          } else if (j - 1 >= 0) {
              board[i][j] = board[i][j-1]
          } else if (i - 1 >= 0) {
              board[i][j] = board[i-1][j]
          }
      }
  }
  
  return board[m-1][n-1]
};