/* Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end. */


function translatePigLatin(str) {
  if (/^[^aeiou]+$/.test(str)) {
      return str + 'ay';
  } 
  
  let reg = /[^aeiou]/;
  let state = reg.test(str[0]);
  if(state) {
    let cl = str.match(/[^aeiou]+/)
    let rev = str.match(/[aeiou][\w]+/)
    return rev[0] + cl[0] + 'ay';
  } else {
    return str + 'way';
  }
}

translatePigLatin("consonant");
