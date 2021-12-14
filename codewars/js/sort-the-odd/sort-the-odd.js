// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortTheOdd(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

module.exports = sortTheOdd;
