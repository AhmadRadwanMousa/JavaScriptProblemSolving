function derive(coefficient, exponent) {
  const output = coefficient * exponent + "x^" + (exponent - 1);
  if (coefficient !== 0 && 1 < exponent) return output;
  else return 0;
}

derive(4, 5);
