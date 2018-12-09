//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  if (str.lastIndexOf(target[target.length - 1]) == (str.length - 1))
    return true;
  return false;
}

confirmEnding("Bastian", "n");