function minimumSwaps(ratings) {
  let swap = (ratingsArray, numberOfSwaps) => {
    if (numberOfSwaps === 0 && ratingsArray[0] === Math.max(...ratingsArray))
      numberOfSwaps = 1;
    let unsortedRatingsArray = ratingsArray.slice(numberOfSwaps);
    let currentHihgestRating = Math.max(...unsortedRatingsArray);
    let currentHighestRatingIndex = ratingsArray.indexOf(
      Math.max(...unsortedRatingsArray)
    );
    let temp = ratingsArray[numberOfSwaps];
    ratingsArray.splice(numberOfSwaps, 1, currentHihgestRating);
    ratingsArray.splice(currentHighestRatingIndex, 1, temp);
    ratingsArray.slice(0, numberOfSwaps).concat(unsortedRatingsArray);
  };
  swapTracker = 0;
  swapCount = 0;
  console.log(ratings);
  let ratingsClone = ratings.slice();
  let ratingsSorted = JSON.stringify(ratings.sort((a, b) => b - a));
  while (JSON.stringify(ratingsClone) != ratingsSorted) {
    let oldRatings = ratingsClone.slice();
    swap(ratingsClone, swapTracker);
    swapTracker++;
    if (JSON.stringify(oldRatings) !== JSON.stringify(ratingsClone))
      swapCount++;
  }
  return swapCount;
}
