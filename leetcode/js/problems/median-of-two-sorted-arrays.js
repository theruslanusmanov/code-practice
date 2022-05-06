/**
 * Problem: `https://leetcode.com/problems/median-of-two-sorted-arrays/`
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const findMedianSortedArrays = function(nums1, nums2) {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const half = Math.floor(mergedArray.length / 2);
  if (mergedArray.length % 2) return mergedArray[half];
  return (mergedArray[half - 1] + mergedArray[half]) / 2.0;
};
