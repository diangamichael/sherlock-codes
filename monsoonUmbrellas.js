/*
 * Complete the 'getUmbrellas' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY p
 */

function getUmbrellas(n, p) {
  let newArr = [];
  
  for (let i of p) {
    let count = 1;
    if (n % i == 0) {
      while ( i < n) {
        i += i
        ++count;
      }

      newArr.push(count);
    }
  }

  return newArr.length ?  Math.min(...newArr) : -1;


}

console.log(getUmbrellas(15, [3, 5]));