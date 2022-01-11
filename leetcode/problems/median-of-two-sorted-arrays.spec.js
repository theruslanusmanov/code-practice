import {findMedianSortedArrays} from "./median-of-two-sorted-arrays";

describe('findMedianSortedArrays', function () {
  it('should equal', function () {
    const nums1 = [1, 3];
    const nums2 = [2];
    expect(findMedianSortedArrays(nums1, nums2)).toEqual(2);
  });
  it('should equal', function () {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    expect(findMedianSortedArrays(nums1, nums2)).toEqual(2.5);
  });
});
