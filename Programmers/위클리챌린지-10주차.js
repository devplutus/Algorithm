function solution(line) {
  const pointSet = new Set()
  let minX = Number.MAX_SAFE_INTEGER
  let minY = Number.MAX_SAFE_INTEGER
  let maxX = Number.MAX_SAFE_INTEGER * -1
  let maxY = Number.MAX_SAFE_INTEGER * -1
  
  for (let i = 0; i < line.length; i++) {
      for (let j = 0; j < line.length; j++) {
          if (i !== j) {
              const [a, b, e] = line[i]
              const [c, d, f] = line[j]
              const denominator = a * d - b * c
              if (denominator !== 0) {
                  const x = (e * c - a * f) / denominator * -1
                  const y = (b * f - e * d) / denominator
                  if (x % 1 === 0 && y % 1 === 0) {
                      minX = Math.min(x, minX)
                      minY = Math.min(y, minY)
                      pointSet.add(`${x}|${y}`)
                  }
              }
          }
      }
  }
  
  minX *= -1
  minY *= -1
  
  const point = Array.from(pointSet).map(p => {
      let [x, y] = p.split('|').map(e => parseInt(e))
      maxX = Math.max(maxX, x + minX)
      maxY = Math.max(maxY, y + minY)
      return [x + minX, y + minY]
  })
  
  const answer = Array(maxX + 1).fill(0).map(() => Array(maxY + 1).fill('.'))
  point.forEach(([x, y]) => answer[x][y] = '*')
  return answer.map(e => e.join(''));
}
/*
[0, 1, -1]
[1, 0, -1]

BF - ED = -1
EC - AF = -1

AD - BC = -1

x = 1
y = 1
*/