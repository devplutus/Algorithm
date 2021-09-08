function solution(weights, head2head) {
  const N = weights.length
  const boxer = []
  
  for (let i = 0; i < N; i++) {
      let win = 0
      let lose = 0
      let winOverWeight = 0
      head2head[i].split('').forEach((result, j) => {
          win += result === 'W' ? 1 : 0
          lose += result === 'L' ? 1 : 0
          winOverWeight += result === 'W' && weights[i] < weights[j] ? 1 : 0
      })
      boxer.push({
          id: i + 1,
          weight: weights[i],
          winRate : parseFloat(win / (win + lose) * 100) || 0,
          winOverWeight
      })
  }
  
  boxer.sort((boxer1, boxer2) => {
      if (boxer1.winRate !== boxer2.winRate) return boxer1.winRate < boxer2.winRate ? 1 : -1
      if (boxer1.winOverWeight !== boxer2.winOverWeight) return boxer1.winOverWeight < boxer2.winOverWeight ? 1 : -1
      if (boxer1.weight !== boxer2.weight) return boxer1.weight < boxer2.weight ? 1 : -1
      return boxer1.id > boxer2.id ? 1 : -1
  })
  
  return boxer.map(b => b.id)
}