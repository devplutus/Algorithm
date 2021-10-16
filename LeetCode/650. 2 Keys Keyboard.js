/**
 * @param {number} n
 * @return {number}
 */
 var minSteps = function(n) {
  const dp = [0, 0, 2, 3]
  for (let i = 4; i <= n; i++) {
      for (let j = i - 1; j > 0; j--) {
          if (i % j === 0) {
              if (j === 1) {
                  dp.push(i)
              } else {
                  dp.push(dp[j] + dp[parseInt(i / j)])
              }
              break
          }
      }
  }
  return dp[n]
};

/*
A
none
AA
Copy All
Paste

AAA
Copy All
Paste
Paste

AAAA
Copy All
Paste

Copy All
Paste

AAAAA
Copy All
Paste

Paste
Paste
Paste

AAAAAA
Cppy All
Paste
Copy All
Paste
Paste
*/