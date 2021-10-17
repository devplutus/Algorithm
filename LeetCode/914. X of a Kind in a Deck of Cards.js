/**
 * @param {number[]} deck
 * @return {boolean}
 */
 const GCD = (a, b) => {
  if (b > a) {
      const temp = a
      a = b
      b = temp
  }
  
  while(true) {
      const r = a % b
      if (r === 0) break
      a = b
      b = r
  }
  
  return b
}

var hasGroupsSizeX = function(deck) {
  const check = {}
  
  deck.forEach(d => {
      if (!check[d]) check[d] = 1
      else check[d] += 1
  })
  
  const checkArr = Object.values(check)
  let r = checkArr[0]
  
  for (let i = 1; i < checkArr.length; i++) {
      r = GDC(r, checkArr[i])
  }
  
  return r === 1 ? false : true
};