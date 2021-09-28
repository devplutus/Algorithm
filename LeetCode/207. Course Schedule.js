/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
  const graph = Array(numCourses).fill(0).map(() => [])
  
  for (let i = 0; i < prerequisites.length; i++) {
      const [a, b] = prerequisites[i]
      
      if (graph[b].includes(a) || a === b) {
          return false
      }
      
      const queue = [b]
      const check = Array(numCourses).fill(false)
      
      while (queue.length) {
          const next = queue.shift()
          check[next] = true
          
          if (graph[next].includes(a)) {
              return false
          } else {
              graph[next].filter(e => check[e] === false).forEach(e => queue.push(e))
          }
      }
      
      graph[a].push(b)
  }
  
  return true
};