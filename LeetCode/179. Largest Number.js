/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
  nums.sort((a, b) => {
      const sum1 = parseInt(a.toString() + b.toString())
      const sum2 = parseInt(b.toString() + a.toString())
      return sum2 - sum1
  })
  
  if (nums.filter(n => n === 0).length === nums.length) return '0'
  return nums.join('')
};