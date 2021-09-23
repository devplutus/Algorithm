/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  const freq = {}

  nums.forEach(n => {
      if (freq[n]) freq[n] += 1
      else freq[n] = 1
  })
  
  return Object.keys(freq).sort((a, b) => freq[a] - freq[b]).pop()
};