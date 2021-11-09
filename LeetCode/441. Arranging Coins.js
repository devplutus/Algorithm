/**
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
  let row = 1
  let sum = 1
  
  while(true) {
      if (n === sum) return row
      else if (sum + 1 <= n && n < sum + row + 1) return row
      row += 1
      sum += row
  }
};