/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  if (!digits.length) return []
  
  const phone = {}
  let code = 97
  for (let i = 2; i <= 9; i++) {
      phone[i] = []
      const max = [7, 9].includes(i) ? 4 : 3
      for (let j = 0; j < max; j++) {
          phone[i].push(String.fromCharCode(code))
          code += 1
      }
  }
  
  const answer = []
  
  const combination = (index, result) => {
      if (result.length === digits.length) {
          return answer.push(result)
      } else {
          for (let i = 0; i < phone[digits[index]].length; i++) {
              combination(index + 1, result + phone[digits[index]][i])
          }
      }
      
  }
  
  combination(0, '')
  
  return answer
};