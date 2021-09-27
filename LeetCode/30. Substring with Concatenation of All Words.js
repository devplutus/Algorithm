/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
  const checkWords = {}
  const N = words[0].length
  
  words.forEach(word => {
      if (!checkWords[word]) checkWords[word] = 1
      else checkWords[word] += 1
  })
  
  const answer = []
  
  for (let i = 0; i < s.length; i++) {
      let total = words.length
      const copyWords = {
          ...checkWords
      }
      
      for (let j = i; j < s.length; j += N) {
          if (copyWords[s.substr(j, N)]) {
              if (copyWords[s.substr(j, N)] === 0) {
                  break
              } else {
                  copyWords[s.substr(j, N)] -= 1
                  total -= 1
              }
          } else {
              break
          }
      }
      
      if (total === 0) answer.push(i)
  }
  
  return answer
};