//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  let newStr = str.split(' ');
  let result = newStr.map(i => i[0].toUpperCase() + i.slice(1).toLowerCase()
  );
  return result.join(' ').toString();
}

titleCase("I'm a little tea pot");