/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const queue = []
  
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (matrix[i][j] === 0) queue.push([i, j])
      }
  }
  
  while (queue.length) {
      const [x, y] = queue.pop()
      
      for (let i = 0; i < n; i++) {
          matrix[x][i] = 0
      }
      for (let i = 0; i < m; i++) {
          matrix[i][y] = 0
      }
  }
};