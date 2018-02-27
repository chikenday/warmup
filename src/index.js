module.exports = function warmup(temperature) {
  if (typeof temperature !== 'number') return 'insert number'

  return temperature < -273 ? 'its absolutly zero' : temperature * 9 / 5 + 32;
};
