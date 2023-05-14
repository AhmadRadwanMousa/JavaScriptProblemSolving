function integrate(coefficient, exponent) {
  const NewNumber = exponent + 1;
  if (coefficient > 0 && exponent > 0) {
    return `${coefficient / NewNumber}x^${NewNumber}`;
  }
}
