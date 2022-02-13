/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export const intersection = (nums1, nums2) =>
    [...new Set(nums1.filter(num1 => nums2.includes(num1)))];
