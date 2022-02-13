import {intersection} from './intersection-of-two-arrays';

describe('intersection', () => {
  let nums1;
  let nums2;

  it('example 1', () => {
    nums1 = [1, 2, 2, 1];
    nums2 = [2, 2];
    expect(intersection(nums1, nums2)).toEqual([2]);
  });

  it('example 2', () => {
    nums1 = [4, 9, 5];
    nums2 = [9, 4, 9, 8, 4];
    expect(intersection(nums1, nums2)).toEqual([4, 9]);
  });
});
