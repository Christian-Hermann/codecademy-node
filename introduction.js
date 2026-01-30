// INTRODUCTION
// Example of using template literals with strings and then running code in Node
let noun1 = "Kit";
let adjective = "silly";
let noun2 = "dog";
let verb = "funny";
let noun3 = "house";

console.log(
  `The world's first ${noun1} was a very ${adjective} ${noun2} who loved to ${verb} while eating ${noun3} for every meal.`
);

// run in node

/*
$ node app.js
The world's's first Kit was a very silly dog who loved to funny while eating house for every meal.
$ 
*/

// THE CONSOLE MODULE

const petsArray = ["dog", "cat", "bird", "monkey"];

console.log(petsArray);
console.table(petsArray);
console.assert(petsArray.length > 5);
