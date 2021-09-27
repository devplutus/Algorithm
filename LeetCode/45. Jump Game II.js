/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
  const jumpCount = Array(nums.length).fill(0)
  
  if (nums.length === 1) return 0
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) continue
      const current = jumpCount[i] + 1
      for (let j = i; j < nums.length && j <= i + nums[i]; j++) {
          if (jumpCount[j] === 0 || jumpCount[j] > current) {
              jumpCount[j] = current
          }
      }
  }
  
  return jumpCount[jumpCount.length-1]
};