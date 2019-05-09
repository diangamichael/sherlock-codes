/** 
 *  This function finds the sum of the individual numbers in a string and then sorts the 
 *  string based on the sum of the parts.
 */

function orderWeight(strng) {
  const arrayFromString = strng.split(' ');

  const arrReduced = [];
  arrayFromString.map(num => {
    let j = 0;
    for(let i of num) {
      j += parseInt(i);
    }
    arrReduced.push(j);
  })

  const originalArray = [...arrReduced];
  const sortedArray = [];

  const sortedReducedArray = arrReduced.sort((a, b) => a - b);
  sortedReducedArray.map(num => {
    sortedArray.push(arrayFromString[originalArray.indexOf(num)]);
  })

  console.log(originalArray);
  console.log(sortedReducedArray)
  console.log(sortedArray.join(' '));

  return sortedArray.join(' ');
}

orderWeight("103 123 4444 99 2000");
orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123");

// https://www.codewars.com/kata/weight-for-weight/train/javascript