/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  const answer = []
  const visited = Array(nums.length).fill(false)
  let count = 0
  const dfs = (total) => {
      count += 1
      if (total.length === nums.length) {
          return answer.push(total)
      }
      for (let i = 0; i < nums.length; i++) {
          if (!visited[i]) {
              visited[i] = true
              dfs([...total, nums[i]])
              visited[i] = false
          }
      }
  }
  dfs([])
  console.log(count)
  return answer
};