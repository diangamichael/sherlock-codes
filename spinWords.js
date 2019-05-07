/** Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed    * (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one  * word is present.
 */

function spinWords(str){
  const splitStr = str.split(' ');
  const reverse = (str) => str.split('').reverse().join('');

  let newStr = [];

  for (let i of splitStr) {
    if (i.length >= 5) {
      newStr.push(reverse(i));
      continue;
    }

    newStr.push(i);
  }

  return newStr.join(' ')
}

console.log(spinWords('hello my name is Robin van Persie'));