/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let s = 0
  let e = nums.length - 1
  
  while (s <= e) {
      const m = parseInt((s + e) / 2)
      
      if (nums[m] >= target) {
          e = m - 1
      } else {
          s = m + 1
      }
  }
  return s
};