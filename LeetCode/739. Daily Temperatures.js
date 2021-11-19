/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
  const N = temperatures.length
  const answer = Array(N).fill(0)
  const stack = []
  
  for (let i = N - 1; i >= 0; i--) {
      while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
          stack.pop()
      }
      
      if (stack.length) {
          answer[i] = stack[stack.length - 1] - i
      }
      
      stack.push(i)
  }
  
  return answer
};