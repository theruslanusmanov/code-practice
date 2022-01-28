var polinPerm = function(string) {
  var chars = {};
  var currChar;
  var milligan = false;
  var isPerm = true;

  string.split('').forEach((char) => {
    if (char !== ' ') {
      currChar = char.toLowerCase();
      if (chars[currChar] === undefined) {
        chars[currChar] = 0;
      }
      chars[currChar]++;
    }
  });
  Object.keys(chars).forEach((char) => {
    if (chars[char] % 2 > 0) {
      if (milligan) {
        isPerm = false;
      } else {
        milligan = true;
      }
    }
  });
  return isPerm;
}

// TESTS
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');

function polinPerm2(s) {
  const sanitized = s.toUpperCase().split(' ').join('');
  const freq = new Map();
  for (let i = 0; i < sanitized.length; i++) {
    const char = sanitized.charAt(i);
    const prevFreq = freq.get(char) || 0;
    freq.set(char, prevFreq + 1);
  }
  let oddCount = 0;
  for (let char of freq) {
    if (char[1] % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount < 2;
}

// TESTS
console.log(palinPerm2('Tact Coa'), 'true');
console.log(palinPerm2('Tact boa'), 'false');
