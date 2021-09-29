/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  if ((nums1.length + nums2.length) % 2 === 0) {
      const m = parseInt((nums1.length + nums2.length) / 2)
      const concat = nums1.concat(nums2).sort((a, b) => a - b)
      return (concat[m] + concat[m-1]) / 2
  } else {
      const m = parseInt((nums1.length + nums2.length) / 2)
      return nums1.concat(nums2).sort((a, b) => a - b)[m]
  }
};