/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  const answer = []
  const visited = Array(nums.length).fill(false)
  
  const dfs = (index, current) => {
      answer.push([...current])
      for (let i = index; i < nums.length; i++) {
          if (!visited[i]) {
              visited[i] = true
              dfs(i + 1, [...current, nums[i]])
              visited[i] = false
          }
      }
  }
  
  dfs(0, [])
  return answer
};