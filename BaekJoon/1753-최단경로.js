const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [V, E] = input[0].split(' ').map(e => parseInt(e))
const S = parseInt(input[1])
const graph = Array(V + 1).fill(0).map(() => [])

for (let i = 0; i < E; i++) {
  const [u, v, w] = input[i + 2].split(' ').map(e => parseInt(e))
  graph[u].push([v, w])
}

const distance = Array(V + 1).fill(Number.MAX_SAFE_INTEGER)
const visited = Array(V + 1).fill(false)
let queue = [[S, 0]]
distance[S] = 0

while (queue.length) {
  const [node, cost] = queue.shift()
  graph[node].forEach(g => {
    const nextCost = cost + g[1]
    if (nextCost < distance[g[0]]) {
      distance[g[0]] = nextCost
    }
  })

  visited[node] = true

  const nextNode = [-1, Number.MAX_SAFE_INTEGER]
  for (let i = 1; i <= V; i++) {
    if (!visited[i] && nextNode[1] > distance[i]) {
      nextNode[0] = i
      nextNode[1] = distance[i]
    }
  }
  if (nextNode[0] !== -1) queue.push(nextNode)
}

distance.shift()
distance.forEach(d => console.log(d === Number.MAX_SAFE_INTEGER ? 'INF' : d))