/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first. */

function sumAll(arr) {
  let first = arr[0];
  let last = arr[1];
  let result = 0;
  if (first < last) {
    while (first <= last) {
      result += first;
      first++
    }
  } else {
    while (first >= last) {
      result += first;
      first--
    }
  }

  return result;
}

sumAll([1, 4]);