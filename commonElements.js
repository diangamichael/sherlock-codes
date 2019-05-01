/** Takes two arrays and returns the elements present is both arrays
 *  It does not change both parameters and returns a new array.
 * 
 * Takes O(n^2) time.
 */

function commonElements(arr1, arr2) {
  let newArr = [];
  
  for (let i of arr1) {
    if (arr2.includes(i)) 
      newArr.push(i);
  }
  
  return newArr;
}
