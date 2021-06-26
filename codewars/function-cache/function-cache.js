function cache(fn) {
  const cache = {};
  return (...args) => {
    const stamp = JSON.stringify(args);
    if (!(stamp in cache)) {
      cache[stamp] = fn.apply(this, args);
    }
    return cache[stamp];
  }
}

module.exports = cache;