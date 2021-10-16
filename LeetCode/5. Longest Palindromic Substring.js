/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  const reverseS = s.split('').reverse().join('')
  let answer = ""
  for (let i = 0; i <= s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
          const a = s.substring(i, j)
          const b = reverseS.substring(reverseS.length - j, reverseS.length - i)
          if (a === b && answer.length < a.length) answer = a
      }
  }
  return answer
};
