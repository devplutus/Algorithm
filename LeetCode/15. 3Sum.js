/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  if (nums.length < 3) return []
  const n = nums.length
  const answer = new Set()
  const num = {}
  
  nums.forEach((n, i) => num[n] = i)
  
  for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
          if (i !== j) {
              const target = 0 - nums[i] - nums[j]
              const k = num[target]
              if (k !== undefined && i !== k && j !== k) {
                  answer.add([nums[i], nums[j], target].sort((a, b) => a - b).join(','))
              }
          }
      }
  }
  
  return Array.from(answer).map(e => e.split(',').map(c => parseInt(c)))
};
/*
-4, -1 -1 0, 1, 2
*/