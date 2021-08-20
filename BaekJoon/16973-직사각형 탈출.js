const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [N, M] = input[0].split(' ').map(e => parseInt(e))
const map = []
for (let i = 1; i <= N; i++) {
  map.push(input[i].split(' ').map(e => parseInt(e)))
}

const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]
const visited = Array(N).fill(0).map(() => Array(M).fill(false))
const [h, w, sr, sc, fr, fc] = input[N + 1].split(' ').map(e => parseInt(e) - 1)
const queue = [[sr, sc, sr + h, sc + w, 0]]
visited[sr][sc] = true
let answer = -1

while(queue.length) {
  const [sx, sy, fx, fy, cost] = queue.shift()
  if (sx === fr && sy === fc) {
    answer = cost
    break
  }

  for (let i = 0; i < 4; i++) {
    const [dsx, dsy] = [sx + direction[i][0], sy + direction[i][1]]
    const [dfx, dfy] = [fx + direction[i][0], fy + direction[i][1]]
    if (dsx >= 0 && dsy >= 0 && dfx >= 0 && dfy >= 0 && dsx < N && dfx < N && dsy < M && dfy < M) {
      if (!visited[dsx][dsy]) {
        let isWall = false

        if ([0, 1].includes(i)) {
          const ty = i === 0 ? dfy : dsy
          for (let x = dsx; x <= dfx; x++) {
            if (map[x][ty] === 1) {
              isWall = true
              break
            }
          }
        } else {
          const tx = i === 2 ? dfx : dsx
          for (let y = dsy; y <= dfy; y++) {
            if (map[tx][y] === 1) {
              isWall = true
              break
            }
          }
        }

        if (!isWall) {
          visited[dsx][dsy] = true
          queue.push([dsx, dsy, dfx, dfy, cost + 1])
        }
      }
    }
  }
}

console.log(answer)