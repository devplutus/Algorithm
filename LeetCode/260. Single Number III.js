/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumber = function(nums) {
  const obj = {}
  nums.forEach(n => obj[n] = obj[n] ? obj[n] + 1 : 1)
  return Object.keys(obj).filter(key => obj[key] === 1)
};