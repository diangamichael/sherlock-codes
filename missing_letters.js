/* Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let start = alphabet.indexOf(str[0]);
  let end = alphabet.indexOf(str[str.length-1]);
 
  let range = alphabet.slice(start, end+1);

  let i = 0;

  while (start <= end) {
    if (!str.includes(range[i]))
      return range[i];

    start++
    i++;
  }

  return undefined;
}

console.log(fearNotLetter("abce"));
