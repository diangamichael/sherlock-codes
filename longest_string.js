/** This function takes an array of string and returns the longest string in the array
  * If there are two strings of equal length, it returns the first one
  * Takes O(n) time 
  */

 function longestString(arr) {
  let len = 0;
  let longestArray;
  
  for (let i of arr) {
    if (i.length > len) {
      len = i.length;
      longestArray = i;
    }
  }
  
  return longestArray;
}

console.log(longestString(['hello', 'people of the world',  'how are you', 'really long long and so very long string', 'code for fun', 'this is terribly long string, i do not even know why i am writing it']));