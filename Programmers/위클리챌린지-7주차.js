function solution(enter, leave) {
  const answer = Array(enter.length + 1).fill(0)
  let current = [enter.shift()]
  
  while (enter.length || leave.length) {
      if (current.indexOf(leave[0]) !== -1) {
          const currentIdx = current.indexOf(leave[0])
          answer[leave[0]] += (current.length - 1)
          leave.shift()
          current = [...current.slice(0, currentIdx), ...current.slice(currentIdx + 1)]
          current.forEach(c => answer[c] += 1)
      } else {
          if (enter.length) current.push(enter.shift())
      }
  }
  
  return answer.slice(1)
}