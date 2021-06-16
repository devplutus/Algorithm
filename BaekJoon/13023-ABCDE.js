const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

function dfs (people, check, current, count, result) {
  if (count === 4) {
    result[0] = true
  } else {
    for (let i = 0; i < people[current].length; i++) {
      if (check[people[current][i]] === false) {
        check[people[current][i]] = true
        dfs(people, check, people[current][i], count+1, result)
        check[people[current][i]] = false
      }
    }
  }
}


const N = parseInt(input[0].split(' ')[0])
const M = parseInt(input[0].split(' ')[1])

const people = Array(N).fill(0).map(() => [])

for (let i = 0; i < M; i++) {
  const nums = input[i+1].split(' ').map(n => parseInt(n))

  people[nums[0]].push(nums[1])
  people[nums[1]].push(nums[0])
}
const check = Array(N).fill(false)

for (let i = 0; i < N; i++) {
  const result = [false]
  check[i] = true
  dfs(people, check, i, 0, result)
  if (result[0]) {
    console.log(1)
    return
  }
  check[i] = false
}

console.log(0)