/** This function takes an array and returns the number that appears
 *  on odd number of time.
 *  Takes O(n^2) time
 */

function findOdd(A) {
  for (let n of A) {
    let count = 0;
    
    A.forEach((i) => {
      if (i == n) {
        count++;
      }
    })
    
    if (count % 2 == 1) {
      return n;
    }
  }
}

console.log(findOdd([1, 2, 2, 2, 3]));