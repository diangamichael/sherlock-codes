/**
 *  Your job is to write a function which increments a string, to create a new string. 
 *  If the string already ends with a number, the number should be incremented by 1. 
 *  If the string does not end with a number the number 1 should be appended to the new string.
 */

function incrementNumber(numberArray) {
  let i = numberArray.length - 1;

  if(numberArray[i] !== 9) {
    numberArray[i] = parseInt(numberArray[i]) + 1;
    return numberArray.join('');
  }

  if(numberArray[i] == 9) {
        numberArray[i] = 0;
        numberArray[i -1] = numberArray[i -1] + 1;
        // incrementNumber(numberArray.slice(0,i-1));

  }
}

function incrementString(string) {
  let number = '';
  let str = '';
  if(/\d/.test(string)) {
    number = string.match(/\d/g);
    str = string.match(/[a-z]/g)

    return str.join('') + incrementNumber(number);
  }
  
  return string + 1
}

console.log(incrementString('hello'));
console.log(incrementString('hello00239'));

// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript