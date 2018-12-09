/* Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWordLength(str) {
  let new_str = str.split(' ');
  let len = 0;
  new_str.map(i => {
    if (i.length > len)
      len = i.length;
  })
  return len;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");