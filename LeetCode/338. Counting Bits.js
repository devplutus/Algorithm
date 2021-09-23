/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
  const answer = []
  for (let i = 0; i <= n; i++) {
      answer.push(i.toString(2).split('').filter(e => e === '1').length)
  }
  return answer
};