const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
]

const N = parseInt(input[0].split(' ')[1])
const M = parseInt(input[0].split(' ')[0])

const map = []
const dist = []
let queue = []

let answer = -1

for (let i = 1; i <= N; i++){
  map.push(input[i].split('').map(e => parseInt(e)))
  dist.push(Array(M).fill(Number.MAX_SAFE_INTEGER))
}

queue.push([0, 0])
dist[0][0] = 0
while (queue.length > 0) {
  const [cx, cy] = queue[0]
  queue = queue.slice(1)

  directions.forEach(d => {
    const rx = cx + d[0]
    const ry = cy + d[1]
    if (rx >= 0 && ry >= 0 && rx < N && ry < M) {
      if (map[cx][cy] === 1 && dist[rx][ry] > dist[cx][cy]+1) {
        dist[rx][ry] = dist[cx][cy]+1
        queue.push([rx, ry])
      }
      if (map[cx][cy] === 0 && dist[rx][ry] > dist[cx][cy]) {
        dist[rx][ry] = dist[cx][cy]
        queue.push([rx, ry])
      }
    }
  })
}
console.log(dist[N-1][M-1])