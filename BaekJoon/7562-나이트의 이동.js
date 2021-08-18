const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const directions = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
]
const T = parseInt(input[0])

for (let i = 0; i < T; i++) {
  const N = parseInt(input[i * 3 + 1])
  const [x, y] = input[i * 3 + 2].split(' ').map(e => parseInt(e))
  const [tx, ty] = input[i * 3 + 3].split(' ').map(e => parseInt(e))
  
  const board = Array(N).fill(0).map(() => Array(N).fill(false))
  const queue = [[x, y, 0]]
  board[x][y] = true
  while(queue.length) {
    const [cx, cy, cost] = queue.shift()
    if (cx === tx && cy === ty) {
      console.log(cost)
      break
    }

    directions.forEach(d => {
      const dx = cx + d[0]
      const dy = cy + d[1]
      if (dx >= 0 && dy >= 0 && dx < N && dy < N && board[dx][dy] === false) {
        board[dx][dy] = true
        queue.push([dx, dy, cost + 1])
      }
    })
    board[cx][cy] = true
  }
}