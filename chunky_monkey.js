/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
  let myArray = [];
  let returnArray = [];

  for (let i=0; i<arr.length; i++) {
    myArray.push(arr[i]);
    if ((i+1) % size == 0 || i == arr.length - 1) {
      returnArray.push(myArray);
      myArray = [];
    }
  }

  return returnArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);