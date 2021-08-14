function dijkstra(graph, n, s) {
  const visited = Array(n + 1).fill(false)
  const distance = Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  let queue = [
    [s, 0]
  ]
  distance[s] = 0

  while (queue.length) {
    const [node, dist] = queue[0]
    if (queue.length) queue = queue.slice(1)

    graph[node].forEach(g => {
      const cost = dist + g[1]
      if (distance[g[0]] > cost) {
        distance[g[0]] = cost
      }
    })

    visited[node] = true

    let min = Number.MAX_SAFE_INTEGER
    let minNode = -1

    for (let i = 1; i <= n; i++) {
      if (!visited[i] && distance[i] < min) {
        minNode = i
        min = distance[i]
      }
    }

    if (minNode !== -1) queue.push([minNode, min])
  }

  return distance
}

function solution(n, s, a, b, fares) {
  const graph = Array(n + 1).fill(0).map(() => [])
  const distanceMap = [
    []
  ]

  fares.forEach(f => {
    graph[f[0]].push([f[1], f[2]])
    graph[f[1]].push([f[0], f[2]])
  })

  for (let i = 1; i <= n; i++) {
    const distance = dijkstra(graph, n, i)
    distanceMap.push(distance)
  }

  let cost = distanceMap[s][a] + distanceMap[s][b]
  for (let i = 1; i <= n; i++) {
    // 합승 체크
    cost = Math.min(cost, distanceMap[s][i] + distanceMap[i][a] + distanceMap[i][b])
  }

  return cost
}