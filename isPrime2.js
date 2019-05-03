/**
 * Takes an argument and checks if that number is prime.
 * Returns true if it is, and false if not.
 * Takes O(n) time.
 * 
 * @param {num} num 
 */
function isPrime(num) {
  if (num < 2)
    return false;
  let i = 2;
  while (i < num) {
    if (num  % i === 0) {
      return false;
    }
    i++;
  }
  
  return true;
}