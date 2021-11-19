/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
  return Number(x ^ y).toString(2).split('').filter(s => s === '1').length
};