/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. */

function destroyer(arr) {
  // Remove all the values
  let newArr = [];
  let args = Object.values(arguments);
  for (let i=0;i<arr.length;i++){
    if (!args.includes(arr[i]))
      newArr.push(arr[i]);
  }
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);