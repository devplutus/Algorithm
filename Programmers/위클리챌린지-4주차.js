function solution(table, languages, preference) {
  const N = languages.length
  const scores = {}
  const answer = ['', 0]
  
  table.map(t => {
      const mapT = t.split(' ')
      const job = mapT[0]
      let sum = 0
      
      scores[job] = {}
      mapT.slice(1).map((language, i) => {
          scores[job][language] = 5 - i
      })
      
      for (let i = 0; i < N; i++) {
          sum += (scores[job][languages[i]] || 0) * preference[i]
      }
      
      if (answer[1] < sum || (answer[1] === sum && job < answer[0])) {
          answer[0] = job
          answer[1] = sum
      }
  })
  
  return answer[0]
}