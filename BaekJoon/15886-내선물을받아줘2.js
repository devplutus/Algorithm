const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const N = parseInt(input[0])
const map = input[1]
let answer = 0

for (let i = 0; i < N - 1; i++) {
  if (map[i] + map[i+1] === 'EW') {
    answer += 1
  }
}

console.log(answer)