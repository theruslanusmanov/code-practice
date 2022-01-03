/**
 * function CountingSort(input, k)
 *     count ← array of k + 1 zeros
 *     output ← array of same length as input
 *
 *     for i = 0 to length(input) - 1 do
 *         j = key(input[i])
 *         count[j] += 1
 *
 *     for i = 1 to k do
 *         count[i] += count[i - 1]
 *
 *     for i = length(input) - 1 downto 0 do
 *         j = key(input[i])
 *         count[j] -= 1
 *         output[count[j]] = input[i]
 *
 *     return output
 */
export function countingSort(input, k = input.length) {
  const count = new Array(k + 1).fill(0);

  for (let i = 0; i <= input.length; i++) {
    count[i] += 1;
  }

  for (let i = 1; i <= k; i++) {
    count[i] += count[i - 1];
  }

  const output = [];
  for (let i = input.length - 1; i >= 0; i--) {
    count[i] -= 1;
    output.push(input[i]);
  }

  return output;
}
