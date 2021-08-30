const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const tetromino = [
  [[0, 0], [0, 1], [0, 2], [0, 3]], // 1
  [[0, 0], [1, 0], [2, 0], [3, 0]],
  [[0, 0], [1, 0], [0, 1], [1, 1]], // 2
  [[0, 0], [0, 1], [0, 2], [1, 1]], // 3
  [[1, 0], [1, 1], [1, 2], [0, 1]],
  [[0, 0], [1, 0], [2, 0], [1, 1]],
  [[0, 1], [1, 1], [2, 1], [1, 0]],
  [[0, 0], [1, 0], [1, 1], [2, 1]], // 4
  [[0, 1], [1, 1], [1, 0], [2, 0]],
  [[1, 0], [1, 1], [0, 1], [0, 2]],
  [[0, 0], [0, 1], [1, 1], [1, 2]],
  [[0, 0], [1, 0], [1, 1], [1, 2]], // 5
  [[0, 2], [1, 0], [1, 1], [1, 2]],
  [[0, 0], [0, 1], [0, 2], [1, 2]],
  [[0, 0], [0, 1], [0, 2], [1, 0]],
  [[0, 0], [1, 0], [2, 0], [0, 1]],
  [[0, 0], [1, 0], [2, 0], [2, 1]],
  [[0, 0], [0, 1], [1, 1], [2, 1]],
  [[2, 0], [0, 1], [1, 1], [2, 1]],
]

const [N, M] = input[0].split(' ').map(e => parseInt(e))
const map = Array(N).fill(0).map((_, i) => input[i+1].split(' ').map(s => parseInt(s)))
let answer = 0

tetromino.forEach(t => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const point = []
      let check = true
      for (let p = 0; p < 4; p++) {
        const [nx, ny] = [i + t[p][0], j + t[p][1]]
        point.push([nx, ny])
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
          check = false
          break
        }
      }
      if (!check) break
      else {
        let sum = 0
        point.forEach(p => (sum += map[p[0]][p[1]]))
        answer = Math.max(answer, sum)
      }
    }
  }
})

console.log(answer)