/**
 * write a function which iterates through each object, looks for all the pets of a particular species, converts each of those pets' 
 * ages into human years, then reduces the converted pets' ages into one sum
 */

const pets = [
  {
    'name': 'Tinkerbell',
    'species': 'cat',
    'age': 2
  },
  {
    'name': 'Lucy',
    'species': 'dog',
    'age': 12
  },
  {
    'name': 'Chloe',
    'species': 'cat',
    'age': 18
  },
  {
    'name': 'Mojo',
    'species': 'dog',
    'age': 6
  },
  {
    'name': 'Olivia',
    'species': 'parakeet',
    'age': 4
  },
  {
    'name': 'Shadow',
    'species': 'cat',
    'age': 8
  },
  {
    'name': 'Oreo',
    'species': 'cat',
    'age': 5
  },
  {
    'name': 'Molly',
    'species': 'dog',
    'age': 4
  },
  {
    'name': 'Freddie Prinze Jr.',
    'species': 'parakeet',
    'age': 9
  }
];

function sumPetYears(arr, kind, multiply) {
  const arrayOfKind = arr.filter((pet) => pet.species === kind);
  const arrayOfAgesToHumanYears = arrayOfKind.map((pet) => pet.age * multiply);
  const sumOfKindAges = arrayOfAgesToHumanYears.reduce((a, b) => a + b);

  return `The combined ${kind}s' ages: ${sumOfKindAges}`;
}

console.log(sumPetYears(pets, 'dog', 7));
console.log(sumPetYears(pets, 'cat', 4));
console.log(sumPetYears(pets, 'parakeet', 5));
