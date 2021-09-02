const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const directions = [
  [
    [1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]
  ],
  [
    [1, 0, 1, 0], [0, 1, 0, 1]
  ],
  [
    [1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1], [1, 0, 0, 1]
  ],
  [
    [1, 1, 0, 1], [1, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]
  ],
  [
    [1, 1, 1, 1]
  ]
]
const [N, M] = input[0].split(' ').map(e => parseInt(e))
const map = Array(N).fill(0).map((_, i) => input[i + 1].split(' ').map(e => parseInt(e)))
const cctv = []
let answer = Number.MAX_SAFE_INTEGER

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (![0, 6].includes(map[i][j])) {
      cctv.push([map[i][j]-1, i, j])
    }
  }
}

const fill = (map, point, direciton) => {
  const [sx, sy] = point
  // t
  if (direciton[0]) {
    for (let x = sx - 1; x >= 0; x--) {
      if (map[x][sy] === 6) break
      else if (map[x][sy] === 0) map[x][sy] = '#'
    }
  }
  // r
  if (direciton[1]) {
    for (let y = sy - 1; y >= 0; y--) {
      if (map[sx][y] === 6) break
      else if (map[sx][y] === 0) map[sx][y] = '#'
    }
  }
  // b
  if (direciton[2]) {
    for (let x = sx + 1; x < N; x++) {
      if (map[x][sy] === 6) break
      else if (map[x][sy] === 0) map[x][sy] = '#'
    }
  }
  // l
  if (direciton[3]) {
    for (let y = sy + 1; y < M; y++) {
      if (map[sx][y] === 6) break
      else if (map[sx][y] === 0) map[sx][y] = '#'
    }
  }
}

const checkZero = (map) => {
  let count = 0
  map.forEach(i => count += i.filter(j => j === 0).length)
  return count
}

const combinate = (index, current) => {
  if (current.length === cctv.length) {
    const copyMap = map.map(e => [...e])
    current.forEach((c, i) => {
      fill(copyMap, [cctv[i][1], cctv[i][2]], directions[cctv[i][0]][c])
    })
    answer = Math.min(answer, checkZero(copyMap))
    return
  }

  for (let i = 0; i < directions[cctv[index][0]].length; i++) {
    combinate(index + 1, [...current, i])
  }
} 

combinate(0, [])

console.log(answer)