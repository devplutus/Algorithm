function bfs(nodes, stand, start) {
  const check = Array(nodes.length).fill(false)
  check[stand] = true

  const queue = [start]
  
  while(queue.length) {
      const current = queue.shift()
      check[current] = true
      
      nodes[current].forEach(n => {
          if (check[n] === false) {
              queue.push(n)
          }
      })
  }
  
  return check.filter(c => c === true).length - 1
}

function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER
  const nodes = Array(n + 1).fill(0).map(() => [])
  
  wires.forEach(w => {
      nodes[w[0]].push(w[1])
      nodes[w[1]].push(w[0])
  })
  
  for (let i = 1; i <= n; i++) {
      nodes[i].forEach(next => {
          const a = bfs(nodes, i, next)
          const b = bfs(nodes, next, i)
          
          answer = Math.min(answer, Math.abs(a - b))
      })   
  }
  
  return answer;
}