function makeNegative(num) {
  if (num < 0) return num;
  else {
    return Number(`-${num}`);
  }
}
console.log(makeNegative(10));
