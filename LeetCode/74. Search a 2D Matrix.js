/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  let rs = 0
  let re = matrix.length - 1
  
  while (rs <= re) {
      const rm = parseInt((rs + re) / 2)
      
      let cs = 0
      let ce = matrix[rm].length - 1
      
      while (cs <= ce) {
          const cm = parseInt((cs + ce) / 2)
          
          if (matrix[rm][cm] < target) {
              cs = cm + 1
          } else if (matrix[rm][cm] > target) {
              ce = cm - 1
          } else {
              return true
          }
      }
      
      if (cs === matrix[rm].length) {
          rs = rm + 1
      } else {
          re = rm - 1
      }
  }
  
  return false
};