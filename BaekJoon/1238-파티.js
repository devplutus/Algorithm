const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M, X] = input[0].split(' ').map(e => parseInt(e))
const graph = Array(N+1).fill(0).map(() => [])
const answer = []

for (let i = 1; i <= M; i++) {
  const info = input[i].split(' ').map(e => parseInt(e))
  graph[info[0]].push([info[1], info[2]])
}

function getDistance(index) {
  const dist = Array(N+1).fill(Number.MAX_SAFE_INTEGER)
  let queue = []

  queue.push([index, 0])
  dist[index] = 0
  while (queue.length > 0) {
    const [pos, val] = queue[0]
    queue = queue.slice(1)
     
    if (dist[pos] < val) {
        continue
    }
      
    graph[pos].forEach(g => {
      if (dist[g[0]] > g[1] + val) {
        dist[g[0]] = g[1] + val
        queue.push([g[0], g[1] + val])
      }
    })
  }
  return dist
}

const target = getDistance(X)
for (let i = 1; i <= N; i++) {
  if (i !== X) {
    answer.push(getDistance(i)[X] + target[i])
  }
}
console.log(Math.max(...answer))