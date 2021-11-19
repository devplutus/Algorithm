/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
  const check = Array(nums.length + 1).fill(false)
  const answer = []
  
  nums.forEach(n => check[n] = true)
  
  for (let i = 1; i < check.length; i++) {
      if (!check[i]) answer.push(i)
  }
  
  return answer
};