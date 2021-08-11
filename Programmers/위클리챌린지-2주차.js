function solution(scores) {
  const grade = ['F', 'F', 'F', 'F', 'F', 'D', 'D', 'C', 'B', 'A', 'A']
  let answer = ''
  for (let j = 0; j < scores.length; j++) {
      const temp = []
      
      for (let i = 0; i < scores.length; i++) {
          temp.push(scores[i][j])
      }
      
      const [max, min] = [Math.max(...temp), Math.min(...temp)]
      const [isMax, isMin] = [temp[j] === max, temp[j] === min]
      let isExclude = isMax || isMin ? 1 : 0
      if (isExclude) {
          const target = isMax ? max : min
          isExclude = temp.indexOf(target) === temp.lastIndexOf(target)
      }
      temp[j] = isExclude ? 0 : temp[j]
      const avg = temp.reduce((a, b) => a += b) / (temp.length - isExclude)
      answer += grade[Math.floor(avg / 10)]
  }
  return answer
}