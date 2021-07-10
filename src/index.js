
exports.min = function min(array = 0) {
  if ((array.length == 0) || (array == 0)) return 0;
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min >= array[i]) {
      min = array[i]
    }
  }
  return min
}

exports.max = function max(array = 0) {
  if ((array.length == 0) || (array == 0)) return 0;
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max <= array[i]) {
      max = array[i]
    }
  }
  return max
}

exports.avg = function avg(array = 0) {
  if ((array.length == 0) || (array == 0)) return 0;
  let sum = array.reduce((a, b) => a + b);
  return avg = sum / (array.length)
}
