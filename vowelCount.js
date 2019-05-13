/** 
 *  *Write a function which counts the number of vowels in a given string. Return the count number.
 */

function vowelCount(str) {
  const vowels = str.match(/[aeiou]/gi);
  
  if (vowels === null) 
    return 0;
    
  return vowels.length;
}
