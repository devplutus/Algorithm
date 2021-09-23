/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
  const tree = [[1]]
  for (let i = 1; i <= rowIndex; i++) {
      const newArr = [1]
      for (let j = 1; j < tree[i - 1].length; j++) {
          newArr.push(tree[i - 1][j - 1] + tree[i - 1][j])
      }
      newArr.push(1)
      tree.push(newArr)
  }
  
  return tree[tree.length - 1]
};