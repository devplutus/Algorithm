/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

 var exist = function(board, word) {
  const m = board.length
  const n = board[0].length
  let answer = false
  
  const dfs = (x, y, index, visited) => {
      if (index === word.length) {
          return answer = true
      }
      
      const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
      
      for (let i = 0; i < 4; i++) {
          const dx = x + directions[i][0]
          const dy = y + directions[i][1]
          if (dx >= 0 && dy >= 0 && dx < m && dy < n && !visited[dx][dy]) {
              if (board[dx][dy] === word[index]) {
                  visited[dx][dy] = true
                  dfs(dx, dy, index + 1, visited)
                  visited[dx][dy] = false
              }
          }
      }
  }
  
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (board[i][j] === word[0]) {
              const visited = Array(m).fill(0).map(() => Array(n).fill(false))
              visited[i][j] = true
              dfs(i, j, 1, visited)
              if (answer) return true
          }
      }
  }
  
  return false
  
};