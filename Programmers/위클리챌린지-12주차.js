const fill = (rect, board) => {
  const [x1, x2] = [rect[0], rect[2]]
  const [y1, y2] = [rect[1], rect[3]]

  for (let x = x1; x <= x2; x++) {
      for (let y = y1; y <= y2; y++) {
          if (board[x][y] === 0) board[x][y] = 1
      }   
  }
}

const exclude = (rect, board) => {
  const [x1, x2] = [rect[0], rect[2]]
  const [y1, y2] = [rect[1], rect[3]]

  for (let x = x1 + 1; x < x2; x++) {
      for (let y = y1 + 1; y < y2; y++) {
          board[x][y] = 0
      }
  }
}

function solution(rectangle, characterX, characterY, itemX, itemY) {
  const max = 200
  const board = Array(max).fill(0).map(() => Array(max).fill(0))
  const visited = Array(max).fill(0).map(() => Array(max).fill(false))
  
  for (let i = 0; i < rectangle.length; i++) {
      fill(rectangle[i].map(e => e * 2), board)
      for (let j = 0; j <= i; j++) {
          exclude(rectangle[j].map(e => e * 2), board)
      }
  }
  
  const queue = [[characterX * 2, characterY * 2, 0]]
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  
  while (queue.length) {
      const [x, y, count] = queue.shift()
      visited[x][y] = true
      
      if (x === itemX * 2 && y === itemY * 2) {
          return parseInt(count / 2)
      }
      
      directions.forEach(d => {
          const dx = x + d[0]
          const dy = y + d[1]
          if (dx >= 0 && dy >= 0 && dx < max && dy < max && !visited[dx][dy]) {
              if (board[dx][dy] === 1)
              queue.push([dx, dy, count + 1])
          }
      })
  }
  board.forEach(e => console.log(e.join(' ')))
  return null;
}