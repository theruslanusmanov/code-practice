// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

function anagrams(word, words) {
  return words.filter(w => reorder(w) === reorder(word));
}
function reorder(word) {
  return word.split('').sort().join('');
}
