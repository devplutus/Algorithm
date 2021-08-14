function solution(N, road, K) {
  const graph = Array(N + 1).fill(0).map(() => [])
  const visit = Array(N + 1).fill(false)
  const distance = Array(N + 1).fill(Number.MAX_SAFE_INTEGER)
  let answer = 0
  
  road.forEach(r => {
      graph[r[0]].push([r[1], r[2]])
      graph[r[1]].push([r[0], r[2]])
  })
  
  distance[1] = 0
  let queue = [[1, 0]]
  
  while(queue.length) {
      const [node, dist] = queue[0]
      if (queue.length) queue = queue.slice(1)
      
      graph[node].forEach(g => {
          const cost = dist + g[1]
          if (distance[g[0]] > cost) {
              distance[g[0]] = cost
          }
      })
      
      visit[node] = true
      
      let min = Number.MAX_SAFE_INTEGER
      let minNode = -1
      
      for (let i = 1; i <= N; i++) {
          if (!visit[i] && distance[i] < min) {
              min = distance[i]
              minNode = i
          }
      }
      
      if (minNode !== -1) {
          queue.push([minNode, min])
      }
  }
  
  for (let i = 1; i <= N; i++) {
      if (distance[i] <= K) answer += 1
  }
  
  return answer;
}