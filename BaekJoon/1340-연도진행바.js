const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const currentDt = new Date(input[0])
const currentYear = currentDt.getFullYear()
const isLeaf = currentYear % 400 === 0 || (currentYear % 4 === 0 && currentYear % 100 !== 0)

const max = (isLeaf ? 366 : 365) * 60 * 24
let sum = 0

for (let i = 0; i < currentDt.getMonth(); i++) {
  if (i === 1 && isLeaf)  sum += 29
  else sum += months[i]
}
sum += currentDt.getDate()-1
sum = sum * 60 * 24
sum += 60 * currentDt.getHours()
sum += currentDt.getMinutes()
console.log((sum / max * 100).toFixed(9))


