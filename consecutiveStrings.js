function longestConsec(strarr, k) {
  if (k > strarr.length || k < 0)
    return "";
    
  else if (strarr.length == k)
    return strarr.join('');

  let strCopy = [...strarr];
    
  strarr.sort();
  strarr.sort((a, b) => b.length - a.length);

  let newStr = strarr.slice(0, k);
  let newArr = [];

  // return newStr.join('');
  for (let i of newStr) {
    newArr.push(strCopy.indexOf(i));
  }

  // return newArr;

  newArr.sort();

  let str = '';
  for (let i of newArr) {
    str += strCopy[i];
  }

  return str;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2));