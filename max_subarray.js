//Return an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {
  let myArray = [];
  arr.map(i => {
    myArray.push(Math.max(...i));
  });

  return myArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);