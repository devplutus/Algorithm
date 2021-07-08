const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [n, m ,k] = input[0].split(' ').map(v => parseInt(v))
let quests = []
let answer = 0

for (let i = 1; i <= m; i++) {
  quests.push(input[i].split(' ').map(v => parseInt(v)))
}

function dfs(arr, index) {
  if (arr.length === n) {
    let count = 0
    for (let i = 0; i < quests.length; i++) {
      let isValid = true
      for (let j = 0; j < k; j++) {
        if (arr.indexOf(quests[i][j]) === -1) {
          isValid = false
          break
        }
      }
      count += isValid ? 1 : 0
    }
    answer = Math.max(count, answer)
  } else {
    for (let i = index; i <= 2*n; i++) {
      arr.push(i)
      dfs(arr, i+1)
      arr.pop()
    }
  }
}

dfs([], 1)
console.log(answer)