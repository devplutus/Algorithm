function solution(board) {
  const N = board.length
  const directions = [[0, 1], [-1, 0], [0, -1], [1, 0]]
  const queue = [[[0, 0], [0, 1], 0]]
  const visit = ["0,0,0,1"]
  
  const comparePoint = (p1, p2) => {
      if (p1[0] === p2[0]) {
          return p1[1] < p2[1] ? [p1, p2] : [p2, p1]
      } else {
          return p1[0] < p2[0] ? [p1, p2] : [p2, p1]
      }
  }
  
  const rotate = (queue, p1, p2, cost) => {
      let points, check
      if (p1[0] === p2[0]) {
          // 가로
          points = [
              [p1, [p1[0] + 1, p1[1]]],
              [p1, [p1[0] - 1, p1[1]]],
              [p2, [p2[0] + 1, p2[1]]],
              [p2, [p2[0] - 1, p2[1]]],
          ]
          check = [
               [p1[0] + 1, p1[1] + 1],
               [p1[0] - 1, p1[1] + 1],
               [p2[0] + 1, p2[1] - 1],
               [p2[0] - 1, p2[1] - 1],
          ]
      } else {
          // 세로
          points = [
              [p1, [p1[0], p1[1] - 1]],
              [p1, [p1[0], p1[1] + 1]],
              [p2, [p2[0], p2[1] - 1]],
              [p2, [p2[0], p2[1] + 1]],
          ]
          check = [
               [p1[0] + 1, p1[1] - 1],
               [p1[0] + 1, p1[1] + 1],
               [p2[0] - 1, p2[1] - 1],
               [p2[0] - 1, p2[1] + 1],
          ]
      }
      
      points.forEach((p, i) => {
          const [np1, np2] = comparePoint(p[0], p[1])
          const npCheck = check[i]
          const point = [...np1, ...np2].join(',')
          if ((np1[0] >= 0 && np1[1] >= 0 && np1[0] < N && np1[1] < N) &&
              (np2[0] >= 0 && np2[1] >= 0 && np2[0] < N && np2[1] < N) &&
              (npCheck[0] >= 0 && npCheck[1] >= 0 && npCheck[0] < N && npCheck[1] < N) &&
             board[np1[0]][np1[1]] === 0 && board[np2[0]][np2[1]] === 0 && board[npCheck[0]][npCheck[1]] === 0 &&
             visit.indexOf(point) === -1) {
              visit.push(point)
              queue.push([np1, np2, cost+1])
          }
      })
  }
  
  while (queue.length) {
      const current = queue.shift()
      const cost = current[2]
      const [p1, p2] = comparePoint(current[0], current[1])
      
      if ((p1[0] === N - 1 && p1[1] === N - 1) || (p2[0] === N - 1 && p2[1] === N - 1)) {
          return cost
      }
      
      // 움직이기
      directions.forEach(d => {
          const [np1, np2] = [[p1[0] + d[0], p1[1] + d[1]], [p2[0] + d[0], p2[1] + d[1]]]
          const point = [...np1, ...np2].join(',')
          
          if (np1[0] >= 0 && np1[0] < N && np1[1] >= 0 && np1[1] < N &&
             np2[0] >= 0 && np2[0] < N && np2[1] >= 0 && np2[1] < N &&
             board[np1[0]][np1[1]] === 0 && board[np2[0]][np2[1]] === 0 &&
             visit.indexOf(point) === -1) {
              visit.push(point)
              queue.push([np1, np2, cost+1])
          }
      })
      
      // 돌리기
      rotate(queue, p1, p2, cost)
  }
}