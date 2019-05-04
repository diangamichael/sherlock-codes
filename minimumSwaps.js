/**
 * ratings: Array<Number> - an array of numbers indicating the popularity rating of each item on the shelf.
 *
 * Return Value
 * Number - denotes the minimum number of swap operations Mary must perform to order all n items by decreasing popularity rating.} ratings 
 */

function minimumSwaps (ratings) {
  let noOfSwap = 0;
  const visited = [];

  ratings.map((rating, i) => {
    let cycle = 0;

    while(!visited[i]) {
      visited[i] = true;
      i = ratings.length - ratings[i];
      cycle += 1;
    }

    if (cycle) {
      noOfSwap += cycle - 1;
    }
  });

  return noOfSwap;
}

console.log(minimumSwaps([3, 2, 4]));
console.log(minimumSwaps([5,3,4,2,1]));