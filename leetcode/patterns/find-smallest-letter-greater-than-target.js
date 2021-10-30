var nextGreatestLetter = function(letters, target) {
  return letters.filter(x=> x.charCodeAt(0) > target.charCodeAt(0))[0] || letters[0]
};

module.exports = { nextGreatestLetter };