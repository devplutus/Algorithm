/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
 var twoOutOfThree = function(nums1, nums2, nums3) {
  const map = {}
  nums1.forEach(n => {
      if (!map[n]) map[n] = [1]
  })
  nums2.forEach(n => {
      if (!map[n]) map[n] = [2]
      else if (map[n].length === 1 && map[n][0] !== 2) map[n].push(2)
  })
  nums3.forEach(n => {
      if (map[n] && map[n].length >= 1 && map[n][map[n].length - 1] !== 3) map[n].push(3)
  })
  
  const answer = []
  Object.keys(map).forEach(key => map[key].length > 1 && answer.push(key))
  return answer
};