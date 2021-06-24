const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [A, B] = input[0].split(' ').map(e => parseInt(e))

const queue = [[A, 1]]

while (queue.length) {
  const [n, count] = queue[0]
  queue.shift()

  if (n === B) {
    return console.log(count)
  } else if (B < n) {
    continue
  } else {
    if (n * 2 <= B) {
      queue.push([n*2, count+1])
    }
    if (n * 10 + 1 <= B) {
      queue.push([n*10+1, count+1])
    }
  }
}
console.log(-1)