/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  const obj = {}
  let answer = 0
  let start = 0
  let end = 0
  while (end < s.length) {
      if (s.substring(start, end).indexOf(s[end]) === -1) {
          end += end === s.length ? 0 : 1
          answer = Math.max(answer, s.substring(start, end).length)
      } else {
          start += 1
      }
      if (start === end) {
          end += 1
      }
  }
  
  return answer
};