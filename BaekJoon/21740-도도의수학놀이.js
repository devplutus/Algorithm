var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = parseInt(input[0])
let arr = input[1].split(' ')

const reverse = (str) => {
  temp = ''
  for (let i = str.length-1; i >= 0; i--) {
    temp += str[i]
  }
  return temp.replace(/6/g, '-').replace(/9/g, '6').replace(/\-/g, '9')
}

arr = arr.map(s => {
  return reverse(s)
})

arr.sort((a, b) => {
  if (a.length > b.length) return -1
  else if (a.length < b.length) return 1
  else {
    if (a > b) return -1
    else if(a < b) return 1
    else 0
  }
})

arr = [arr[0], ...arr]

arr.sort((a, b) => {
  if (a+b > b+a) return -1
  else if (a+b < b+a) return 1
  else return 0
})

sum = arr.join('').replace(/6/g, '-').replace(/9/g, '6').replace(/\-/g, '9')
answer = ""
for (let i = sum.length - 1; i >= 0; i--) {
  answer += sum[i]
}

console.log(answer)