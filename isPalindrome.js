//returns true if the string argument is palindrome

function isPalindrome(word) {
    if (word.split('').reverse().join('') === word)
      return true

    return false;
}
