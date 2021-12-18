// https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

function topThreeWords(text) {
  const splitString = text.trim().split(/\s+/);
  const setString = new Set(splitString);
  const mapString = new Map(setString.entries());

  mapString.forEach((v, k) => {
    mapString.set(k, 0);
  });

  console.log(mapString.entries());

  splitString.map(v => {
    mapString.forEach((_, k) => {
      if (mapString.has(v)) {
        mapString.set(v, mapString.get(v) + 1);
      }
    });
  });

  console.log(mapString.entries());
}

module.exports = topThreeWords;
