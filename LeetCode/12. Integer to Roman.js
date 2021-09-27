/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
  const roman = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M',
  }
  
  let answer = ''
  
  Object.keys(roman).sort((a, b) => b - a).forEach(key => {
      if (num !== 0 && num >= key) {
          answer += (roman[key]).repeat(parseInt(num / key))
          num -= parseInt(num / key) * key
      }
  })
  
  return answer
};