const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [N, M] = input[0].split(' ').map(e => parseInt(e))

let answer = 0
let safeArea = 0

const virus = []
const lab = Array(N).fill(0).map((_, i) => input[i+1].split(' ').map((e, j) => {
  const unit = parseInt(e)
  if (unit === 2) virus.push([i, j])
  if (unit === 0) safeArea += 1
  return unit
}))

const bfs = (lab) => {
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  const visit = Array(N).fill(0).map(() => Array(M).fill(false))
  let queue = [...virus]
  let currentLabSafeArea = safeArea - 3
  
  queue.forEach(v => visit[v[0]][v[1]] = true)

  while (queue.length) {
    const [x, y] = queue.shift()

    directions.forEach(d => {
      const [dx, dy] = [x + d[0], y + d[1]]
      if (dx >= 0 && dy >= 0 && dx < N && dy < M && !visit[dx][dy] && lab[dx][dy] === 0) {
        queue.push([dx, dy])
        visit[dx][dy] = true
        currentLabSafeArea -= 1
      }
    })
  }

  answer = Math.max(currentLabSafeArea, answer)
}

const buildWall = (lab, wallCount) => {
  if (wallCount === 3) {
    bfs(lab)
  } else {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (lab[i][j] === 0) {
          lab[i][j] = 1
          buildWall(lab, wallCount + 1)
          lab[i][j] = 0
        }
      }
    }
  }
}


buildWall(lab, 0)
console.log(answer)