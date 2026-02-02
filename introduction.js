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
// Exercise using log, table, and assert

const petsArray = ["dog", "cat", "bird", "monkey"];

console.log(petsArray);
console.table(petsArray);
console.assert(petsArray.length > 5);

// run in Node
/*
[ 'dog', 'cat', 'bird', 'monkey' ]
┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ 'dog'    │
│ 1       │ 'cat'    │
│ 2       │ 'bird'   │
│ 3       │ 'monkey' │
└─────────┴──────────┘
Assertion failed
*/

// THE PROCESS MODULE EXERCISE
let initialMemory = null;
let word = null;

console.log(`Your word is ${word}`);

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time
for (let i = 0; i < 1000; i++) {
  wordArray.push(`${word} count: ${i}`);
}

console.log(
  `Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${
    process.memoryUsage().heapUsed
  }. \nAfter using the loop to add elements to the array, the process is using ${
    process.memoryUsage().heapUsed - initialMemory
  } more bytes of memory.`
);
