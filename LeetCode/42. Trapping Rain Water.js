/**
 * @param {number[]} height
 * @return {number}
 */

 const find = (height) => {
  let answer = 0
  let dp = [[height[0], 0]]
  for (let i = 1; i < height.length; i++) {
      if (dp[i-1][0] <= height[i]) {
          answer += dp[i-1][1]
          dp.push([height[i], 0])
      } else {
          dp.push([dp[i-1][0], dp[i-1][1] + dp[i-1][0] - height[i]])
      }
  }
  
  if (dp[dp.length-1][1] !== 0) {
      height.reverse()
      const max = height.indexOf(dp[dp.length-1][0])
      dp = [[height[0], 0]] 
      for (let i = 1; i <= max; i++) {
          if (dp[i-1][0] <= height[i]) {
              answer += dp[i-1][1]
              dp.push([height[i], 0])
          } else {
              dp.push([dp[i-1][0], dp[i-1][1] + dp[i-1][0] - height[i]])
          }
      }
  }
  
  return answer
}

var trap = function(height) {
  return find(height)
};