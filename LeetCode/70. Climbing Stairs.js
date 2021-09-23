/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  const pb = [1, 1, 2]
  
  if (n > 2) {
      for (let i = 2; i <= n; i++) {
          pb.push(pb[i] + pb[i-1])
      }
      
  }
  
  return pb[n]
};