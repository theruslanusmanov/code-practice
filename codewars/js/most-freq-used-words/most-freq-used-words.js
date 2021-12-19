// https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

function topThreeWords(text) {
  const splitString = text.toLowerCase().trim().split(/\s+/);
  const setString = new Set(splitString);
  const mapString = new Map(setString.entries());

  mapString.forEach((v, k) => {
    mapString.set(k, 0);
  });

  splitString.map(v => {
    mapString.forEach((_, k) => {
      if (mapString.has(v)) {
        mapString.set(v, mapString.get(v) + 1);
      }
    });
  });

  console.log(mapString);

  const result = new Map(
    [...mapString.entries()]
      .sort((a, b) => {
        if (a[1] < b[1]) return 1;
        else if (a[1] === b[1]) return 0;
        else return -1;
      })
      .slice(0, 3)
  );
  console.log([...result.keys()]);

  return [...result.keys()];
}

module.exports = topThreeWords;
