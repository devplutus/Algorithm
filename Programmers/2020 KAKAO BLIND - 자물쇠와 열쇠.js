function solution(key, lock) {
  const [M, N] = [key.length, lock.length]
  const board = Array(N + (M * 2)).fill(0).map(() => Array(N + (M * 2)).fill(0))
  for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
          board[i + M][j + M] = lock[i][j]
      }
  }
  
  const rotate = () => {
      const result = [key.map(e => [...e])]
      
      for (let d = 0; d < 3; d++) {
          const r = Array(M).fill(0).map(() => Array(M).fill(0))
          for (let i = 0; i < M; i++) {
              for (let j = 0; j < M; j++) {
                  r[j][M-i-1] = key[i][j]
              }
          }
          result.push(r)
          key = r
      }
      
      return result
  }
  
  const check = (board) => {
      for (let i = 0; i < N; i++) {
          for (let j = 0; j < N; j++) {
              if (board[i + M][j + M] === 0) {
                  return false
              }
          }
      }
      return true
  }
  
  const bind = (key) => {
      for (let i = 0; i < board.length - M; i++) {
          for (let j = 0; j < board.length - M; j++) {
              const copy = board.map(e => [...e])
              for (let x = 0; x < M; x++) {
                  for (let y = 0 ; y < M; y++) {
                      if (key[x][y] === 1 && copy[x + i][y + j] === 0) {
                          copy[x + i][y + j] = 1
                      } else if (key[x][y] === 1 && copy[x + i][y + j] === 1) {
                          copy[x + i][y + j] = 0
                      }
                  }
              }
              
              if (check(copy)) return true
          }
      }
      return false
  }
  
  const keys = rotate()
  
  for (let i = 0; i < keys.length; i++) {
      if (bind(keys[i])) {
          return true
      }
  }
  return false
}