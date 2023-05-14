function twiceAsOld(dadYearsOld, sonYearsOld) {
  let count = 0;
  while (dadYearsOld / 2 !== sonYearsOld) {
    if (dadYearsOld / 2 < sonYearsOld) dadYearsOld++;
    else dadYearsOld--;
    count++;
  }
  return count;
}
console.log(twiceAsOld(55, 30));
