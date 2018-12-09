//Remove all falsy values from an array.

function bouncer(arr) {
  let newArr = [];
  arr.map(i =>{
    if (i)
      newArr.push(i)
  });
  return newArr;
}

bouncer([7, "ate", "", false, 9]);