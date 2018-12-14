/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
  let newStr = str.match(/[_A-Z\w][a-z]+/g);
  return newStr.join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');