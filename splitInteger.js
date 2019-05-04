/**
 * Returns a [parts]-length array of equal or nearly equal
 * integers that add up to [num].
 */
function splitInteger(num, parts) {
  if (num % parts === 0) {
    return Array(parts).fill(num/parts);
  }

  result = Array(parts).fill(Math.floor(num/parts));

  sumOfResult = result.reduce((a, b) => a + b)

  remainder = num - sumOfResult;

  
  let i = 0;

  while (sumOfResult < num) {
    result[i]++;
    sumOfResult++;
    i++;
  }

  return result;
}
console.log(splitInteger(10, 5));
console.log(splitInteger(20, 6));
