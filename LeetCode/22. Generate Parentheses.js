/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  const dp = [['']]
  
  for (let i = 1; i <= n; i++) {
      const sum = []
      
      for (let x = 0; x <= i - 1; x++) {
          const first = dp[x].map(d => `(${d})`)
          dp[i-x-1].forEach(d => {
              first.forEach(f => {
                  sum.push(f + d)
              })
          })
          
      }
      
      dp.push(sum)
  }
  return dp[n]
};

/*
dp[0] = ''
dp[1] = (f(0))
dp[2] = (f(0))f(1) (f(1))
dp[3] = (f(0))f(2) (f(1))f(1) (f(2))
dp[4] = (f(0))f(3) (f(1))f(2) (f(2))f(1) (f(3))
*/