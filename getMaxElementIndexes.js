/*
 * Complete the 'getMaxElementIndexes' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY rotate
 */

function getMaxElementIndexes(a, rotate) {
  
  const performRotation = (arr, num) => {
    let count = 0;

      while (count < num) {
          const val = arr.shift()
          arr.push(val);
          count++;
      }

      return arr;
  }

  let newArr = [];
  for (let i of rotate) {
    let arr2 = [...a];
    performRotation(arr2, i);
    newArr.push(arr2.indexOf(Math.max(...arr2)));
  }
  return newArr
}

console.log(getMaxElementIndexes([1, 2, 4, 3], [0, 2]));