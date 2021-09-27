/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
  const check = Array(nums.length).fill(false)
  check[0] = true
  
  for (let i = 0; i < nums.length; i++) {
      if (!check[i]) break
      for (let j = i; j < nums.length && j <= i + nums[i]; j++) {
          check[j] = true
      }
  }
  
  return check.filter(a => a === false).length ? false : true
};