function combinationGroup(arr, index, result, text) {
  if (index === arr.length) {
  result.push(text.trim())
  } else {
      combinationGroup(arr, index + 1, result, `${text} -`)
      combinationGroup(arr, index + 1, result, `${text} ${arr[index]}`)
  }
}

function combinationType(arr, index, result, text) {
  if (index === arr.length) {
      result.push(text.trim())
  } else {
      for (let i = 0; i < arr[index].length; i++) {
        combinationType(arr, index + 1, result, `${text} ${arr[index][i]}`)
      }
  }
}

function solution(info, query) {
  const type = [
    ['cpp', 'java', 'python'],
    ['backend', 'frontend'],
    ['junior', 'senior'],
    ['pizza', 'chicken'],
  ]
  const newInfo = []
  const answer = []
  const types = []
  const groups = {}
  combinationType(type, 0, types, '')
  types.forEach(t => {
      groups[t] = []
      combinationGroup(t.split(' '), 0, groups[t], '')
  })
  
  info.forEach(i => {
      const applicant = i.split(' ')
      const score = parseInt(applicant[applicant.length-1])
      const groupName = applicant.slice(0, 4).join(' ')
      
      groups[groupName].forEach(g => {
          if (newInfo[g]) {
              newInfo[g].push(score)
          } else {
              newInfo[g] = [score]
          }
      })
  })
  
  Object.keys(newInfo).forEach(key => {
      newInfo[key].sort((a, b) => a - b)
  })
  
  query.forEach(q => {
      q = q.replace(/and\s/ig, '').split(' ')
      const key = q.slice(0, 4).join(' ')
      const score = parseInt(q[4])
      if (newInfo[key]) {
          const scoreList = newInfo[key]
          // Binary Search
          let s = 0
          let e = scoreList.length

          while(s < e) {
              const m = Math.floor((e + s) / 2)

              if (score <= scoreList[m]) {
                  e = m
              } else {
                  s = m + 1
              }
          }
          
          answer.push(scoreList.length - s)
      } else {
          answer.push(0)
      }
  })
  
  return answer;
}