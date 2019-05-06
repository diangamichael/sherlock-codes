/**  The first word within the output should be capitalized only if the original word was capitalized.
 *   Takes O(n) time.
 */

function toCamelCase(str){
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    if (str[i] === '_' || str[i] === '-') {
      newStr += str[i+1].toUpperCase()
      i++;
      continue;
    }
    
    newStr += str[i];
  }
  
  return newStr;
}