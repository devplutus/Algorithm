/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  const check = {}
  for (let i = 0; i < strs.length; i++) {
      const align = strs[i].split('').sort((a, b) => a > b ? 1 : a < b ? -1 : 0).join('')
      if (!check[align]) check[align] = [strs[i]]
      else check[align].push(strs[i])
  }
  return Object.values(check)
};