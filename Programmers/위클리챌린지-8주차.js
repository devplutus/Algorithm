function solution(sizes) {
  let w = sizes[0][0]
  let h = sizes[0][1]
  
  for (let i = 1; i < sizes.length; i++) {
      const w1 = Math.max(w, sizes[i][0])
      const w2 = Math.max(w, sizes[i][1])
      const h1 = Math.max(h, sizes[i][1])
      const h2 = Math.max(h, sizes[i][0])
      if (w1 * h1 > w2 * h2) {
          w = w2
          h = h2
      } else {
          w = w1
          h = h1
      }
  }
  
  return w * h
}