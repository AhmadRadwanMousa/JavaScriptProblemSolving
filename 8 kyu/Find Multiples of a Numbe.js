function findMultiples(integer, limit) {
  let lastValue = 0;
  let count = 1;
  const values = [];
  while (true) {
    lastValue = integer * count;
    if (lastValue <= limit) {
      values.push(lastValue);
      count++;
    } else {
      break;
    }
  }
  return values;
}
console.log(findMultiples(11, 44));
