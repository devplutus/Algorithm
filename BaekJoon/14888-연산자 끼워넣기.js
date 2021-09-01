const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = parseInt(input[0])
const nums = input[1].split(' ').map(e => parseInt(e))
const opers = input[2].split(' ').map(e => parseInt(e))
const answer = [-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]

const calc = (a, b, oper) => {
  switch (oper) {
    case 0:
      return a + b
    case 1:
      return a - b
    case 2:
      return a * b
    case 3:
      return a >= 0 ? parseInt(a / b) : -parseInt(-a / b)
  }
}

const combination = (sum, index, rest) => {
  if (rest === 0) {
    answer[0] = Math.max(answer[0], sum)
    answer[1] = Math.min(answer[1], sum)
    return
  }

  for (let i = 0; i < 4; i ++) {
    if (opers[i] > 0) {
      opers[i] -= 1
      combination(calc(sum, nums[index], i), index + 1, rest - 1)
      opers[i] += 1
    }
  }
}

combination(nums[0], 1, N - 1)
console.log(answer[0] || 0)
console.log(answer[1] || 0)