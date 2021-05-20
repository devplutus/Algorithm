var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = input[0]
const nums = input[1].match(/[0-9]+/g).map(s => parseInt(s))
const operator = input[1].match(/[A-Z]/g)
const answer = []

let sum = nums[0]
let num_index = 1

operator.forEach(operate => {
  if (operate === 'S') {
    sum -= nums[num_index++]
  } else if (operate === 'M') {
    sum *= nums[num_index++]
  } else if (operate === 'U') {
    sum = parseInt(sum / nums[num_index++])
  } else if (operate === 'P') {
    sum += nums[num_index++]
  } else {
    answer.push(sum)
  }
})

if (answer.length) {
  console.log(answer.join(' '))
} else {
  console.log('NO OUTPUT')
}

// 5
// 3S2M3U1P2C