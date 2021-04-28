function solution(maps) {
  let answer = -1;
  const queue = [[0, 0, 0]]

  while (queue.length) {
    const [x, y, c] = queue.shift()

    if (x === maps.length - 1 && y === maps[x].length - 1) {
      if (answer === -1 || answer > c) {
        answer = c + 1
      }
    }

    if (answer !== -1 && answer < c) {
      continue
    }

    // L
    if (y - 1 >= 0 && maps[x][y - 1] === 1) {
      maps[x][y - 1] = 0
      queue.push([x, y - 1, c + 1])
    }
    // R
    if (y + 1 < maps[x].length && maps[x][y + 1] === 1) {
      maps[x][y + 1] = 0
      queue.push([x, y + 1, c + 1])
    }
    // T
    if (x - 1 >= 0 && maps[x - 1][y] === 1) {
      maps[x - 1][y] = 0
      queue.push([x - 1, y, c + 1])
    }
    // B
    if (x + 1 < maps.length && maps[x + 1][y] === 1) {
      maps[x + 1][y] = 0
      queue.push([x + 1, y, c + 1])
    }

  }
  
  return answer
}