function distributeCandies(candies) {
  let candiesAll = {};
  let maxNumber = candies.length / 2;
  let maxTypes;
  for (let i = 0; i < candies.length; i++) {
    if (!candiesAll[candies[i]]) {
      candiesAll[candies[i]] = true;
    }
  }
  maxTypes = Object.keys(candiesAll).length;
  if (maxTypes > maxNumber) {
    return maxNumber;
  } else {
    return maxTypes;
  }
}
distributeCandies([1, 1, 2, 3]);
