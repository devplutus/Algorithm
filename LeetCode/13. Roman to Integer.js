/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  const roman = {
      'I': 1,
      'IV': 4,
      'V': 5,
      'IX': 9,
      'X': 10,
      'XL': 40,
      'L': 50,
      'XC': 90,
      'C': 100,
      'CD': 400,
      'D': 500,
      'CM': 900,
      'M': 1000,
  }
  
  let answer = 0
  
  for (let i = 0; i < s.length; i++) {
      if (s !== s.length - 1 && roman[s.substr(i, 2)]) {
          answer += roman[s.substr(i, 2)]
          i += 1
      } else {
          answer += roman[s[i]]
      }
  }
  
  return answer
};