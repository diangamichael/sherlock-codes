/**
 * Split strings into an array of two characters.
 * If the string length is odd, it appends the '_' to   * the string 
 */

function solution(str) {
  if (str.length % 2 == 1) {
    str += "_";
  }

  let i = 0;
  const arr = [];
  
  while (i < str.length) {
    arr.push(str[i] + str[i + 1]);
    i += 2;
  }

  return arr;
}

console.log(solution("halo"));
console.log(solution("hello"));
