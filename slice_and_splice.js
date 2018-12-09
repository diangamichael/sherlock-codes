/* You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice(0,n)
  let result2 = arr2.slice(n,arr2.length)
  let answer = [...result, ...arr1, ...result2]

  return answer;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);