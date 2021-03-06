/* Bubble Sort is a algorithm to sort an array. It
* compares adjacent element and swaps thier position
* The big O on bubble sort in worst and best case is O(N^2).
 * Not efficient.
*/
function bubbleSort (items) {
  const length = items.length
  for (let i = (length - 1); i > 0; i--) {
    // Number of passes
    for (let j = (length - 1); j > 0; j--) {
      // Compare the adjacent positions
      if (items[j] < items[j - 1]) {
        // Swap the numbers
        [items[j], items[j - 1]] = [items[j - 1], items[j]]
      }
    }
  }
}

// Implementation of bubbleSort

var ar = [5, 6, 7, 8, 1, 2, 12, 14]
// Array before Sort
console.log('-----before sorting-----')
console.log(ar)
bubbleSort(ar)
// Array after sort
console.log('-----after sorting-----')
console.log(ar)

function alternativeBubbleSort(arr) {
  let swapped = true
  while (swapped) {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
  }
  return arr
}

// test
console.log('-----before sorting-----')
var array = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
console.log(array)
console.log('-----after sorting-----')
console.log(alternativeBubbleSort(array))