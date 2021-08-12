const N = 5

function solution(places) {
    let answer = [];
    
    places = places.map((place) => place.map(p => p.split('')))
    places.forEach(place => {
        let result = 1
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (place[i][j] === 'P') {
                    result = bfs(place, i, j)
                    if (!result) break
                }
            }
            if (!result) break
        }
        answer.push(result)
    })
    
    return answer;
}

function bfs(area, x, y) {
    const check = Array(N).fill(0).map(() => Array(N).fill(false))
    const direction = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ]
    
    let queue = [[x, y]]
    check[x][y] = true
    
    while(queue.length) {
        const [cx, cy] = queue[0]
        
        if (queue.length > 0) {
            queue = queue.slice(1)
        }
        
        for (let i = 0; i < direction.length; i++) {
            const [dx, dy] = [cx + direction[i][0], cy + direction[i][1]]
            if (dx >= 0 && dx < N && dy >= 0 && dy < N) {
                const distance = Math.abs(x - dx) + Math.abs(y - dy)
                if (check[dx][dy] === true || distance > 2) continue
                else if (area[dx][dy] === 'P' && distance <= 2) {
                    return 0
                }
                else if (area[dx][dy] !== 'X') {
                    queue.push([dx, dy])
                    check[dx][dy] = true
                }
            }
        }
    }
    
    return 1
}