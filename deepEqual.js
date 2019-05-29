/**
 * *Write a function that, given two objects, returns whether or not the two are deeply equivalent -
 * *meaning the contents of the two objects are equal for all keys and sub-keys.
 * TODO find if there is an object method to perform deep equal and try it out.
 * 
 * @param {object} obj1 The first object to be compared
 * @param {object} obj2 The second object to be compared
 * @returns {boolean}
 */

function deepEquals(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const johnA = {
  name: "John",
  address: {
    line1: "321 Anytown",
    line2: "Stoke-on-Trent"
  }
};

const johnB = {
  name: "John",
  address: {
    line1: "321 Anytown",
    line2: "Stoke-on-Trent"
  }
};

const johnC = {
  name: "John Charles",
  address: {
    line1: "321 Anytown",
    line2: "Stoke-on-Trent"
  }
};

console.log("deepEquals(johnA, johnB): ", deepEquals(johnA, johnB));
console.log("deepEquals(johnA, johnC): ", deepEquals(johnA, johnC));
