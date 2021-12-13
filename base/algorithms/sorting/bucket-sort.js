/*
Wikipedia says: Bucket sort, or bin sort, is a sorting algorithm that works by distributing the
elements of an array into a number of buckets. Each bucket is then sorted individually, either using
a different sorting algorithm, or by recursively applying the bucket sorting algorithm. It is a
distribution sort, and is a cousin of radix sort in the most to least significant digit flavour.
Bucket sort is a generalization of pigeonhole sort. Bucket sort can be implemented with comparisons
and therefore can also be considered a comparison sort algorithm. The computational complexity estimates
involve the number of buckets.

Time Complexity of Solution:
Best Case O(n); Average Case O(n); Worst Case O(n)

*/
function bucketSort(list, size) {
  if (size === undefined) {
    size = 5;
  }
}