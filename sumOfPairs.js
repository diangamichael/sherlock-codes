/**
 *  Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up *  to form the sum.
 */

function sumOfPairs(arr, sum) {
  const newArr = [...arr];

  for (let num of arr) {
    arr.shift();
    const val = sum - num;
    
    if (arr.includes(val)) {
      const x = newArr.indexOf(num);
      const y = newArr.indexOf(val);

      if (x > y) {
        console.log('it happened!')
        return [newArr[y], newArr[x]];
      }
      
      return [num, val];
    }
  }
}

console.log(sumOfPairs([1, 4, 8, 7, 3, 15], 8));
console.log(sumOfPairs([1, -2, 3, 0, -6, 1], -6));
console.log(sumOfPairs([10, 5, 2, 3, 7, 5], 10));

// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
