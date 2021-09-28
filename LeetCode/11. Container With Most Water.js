/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let answer = 0
  let s = 0
  let e = height.length - 1
  
  while (s < e) {
      const w = e - s
      const h = Math.min(height[s], height[e])
      const size = w * h
      answer = Math.max(answer, size)
      if (height[s] > height[e]) {
          e -= 1
      } else {
          s += 1
      }
  }
  
  return answer
};