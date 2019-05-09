/** 
 *  Return the words of the initial song that Polycarpus used to make a dubsteb remix. 
 *  Separate the words with a space.
 *  This function removes every occurrence of the word WUB from the input string.
 */

function songDecoder(song){
  return song.split('WUB').join(' ').trim().replace(/\s+/g, ' ');
}

console.log(songDecoder("AWUBBWUBC"));
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
console.log(songDecoder("WUBAWUBBWUBCWUB"));
console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));

// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript