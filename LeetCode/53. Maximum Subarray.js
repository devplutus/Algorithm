/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let currentSum = nums[0]
  const dp = [nums[0]]
  
  for (let i = 1; i < nums.length; i++) {
      if (currentSum < 0) {
          currentSum = 0
      }
      currentSum += nums[i]
      dp.push(Math.max(currentSum, nums[i-1]))
  }
  
  return Math.max(...dp)
};