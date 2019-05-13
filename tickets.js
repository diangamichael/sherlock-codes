/**
 *  !Does not work
 *  ?Don't know
 */

function tickets(peopleInLine){
  changeInt = 0;

  peopleInLine.map(person => {
    if (person === 25)
      changeInt += 25;
  });

  peopleInLine.map(person => {
    if (person > 25) {
      changeInt -= (person - 25);
    }
  })
  console.log(changeInt);

  return changeInt >= 0 ? 'YES' : 'NO';
}

console.log(tickets([25, 25, 50, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25,50,25,100,25,25,25,100,25,25,25,100]));
console.log(tickets([25,25,25,100,25,25,25,100,25,25,50,100,25,50,25,100,25,50,25,100]));

//? https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript