function combinate(string, result, start, target, answer) {
  if (result.length === target) {
    if (answer[result.join('')]) {
      answer[result.join('')] += 1
    } else {
      answer[result.join('')] = 1
    }
  } else {
    for (let i = start; i < string.length; i++) {
      if (!result.includes(string[i])) {
        result.push(string[i])
        combinate(string, result, i+1, target, answer)
        result.pop()
      }
    }
  }
}

function solution(orders, course) {
  let answer = [];

  orders = orders.map((order) => {
    return order.split('').sort().join('')
  })
  course.forEach((c) => {
    let temp = {}
    orders.forEach((order) => {
      combinate(order, [], 0, c, temp)
    })
    const max = Math.max(...Object.values(temp))
    temp = Object.keys(temp).filter((key) => temp[key] > 1 && temp[key] === max)
    answer = [...answer, ...temp]
  })

  answer.sort()
  return answer;
}