/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let answer = 0
  for (let i = 1; i < prices.length; i++) {
      answer += Math.max(prices[i] - prices[i-1], 0)
  }
  return answer
};