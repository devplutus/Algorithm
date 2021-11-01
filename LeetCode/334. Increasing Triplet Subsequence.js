/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {
  let max = Number.MAX_SAFE_INTEGER
  let min = Number.MAX_SAFE_INTEGER
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= min) min = nums[i]
      else if (nums[i] <= max) max = nums[i]
      else return true
  }
      
  return false
  
};
