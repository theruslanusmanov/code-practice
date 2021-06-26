function cache(func) {
  const cache = {};
  return () => {
    const stamp = JSON.stringify(arguments);
    console.log(cache);
    if (!(stamp in cache)) {
      cache[stamp] = fn.apply(this, arguments);
      console.log('call: ' + cache[stamp]);
    }
    console.log('cache: ' + cache[stamp] + '\n\n');
    return cache[stamp];
  }
}

module.exports = cache;