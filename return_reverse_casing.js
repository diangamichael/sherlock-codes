/** This  function takes in a string, reverses the 'casing' of that string,
 * and returns the "reversed-casing" string
 */

const returnReverseCasing = (char) => (char == char.toUpperCase()) ? char.toLowerCase() : char.toUpperCase();

function reverseCase(str) {
  const originalStr = str.split('');
  let reversedStr = '';
  
  for (let i of originalStr) {
    reversedStr += returnReverseCasing(i);
  }
  
  return reversedStr
}

console.log(reverseCase('hello WORLD!'));
