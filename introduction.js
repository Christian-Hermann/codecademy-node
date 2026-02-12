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

// THE OS MODULE
const os = require("os");

const server = {
  type: os.type(),
  architecture: os.arch(),
  uptime: os.uptime(),
};
console.log(server);

// THE UTIL MODULE
// Require in trails module from trails.js
const trails = require("./trails.js");
// Require in util module here
const util = require("util");

// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
  return setTimeout(() => {
    if (trails.hasOwnProperty(trail)) {
      const foundTrail = trails[trail];
      callback(null, foundTrail);
    } else {
      callback(new Error("Trail not found!"));
    }
  }, 250); // short timeout needed for testing
};

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
function callback(error, trailData) {
  if (error) {
    console.error(error.message);
    process.exit(1);
  } else {
    const mi = trailData.miles;
    const nickname = trailData.nickname;
    console.log(`The ${nickname} is ${mi} miles long!`);
  }
}

getTrailDistance("North Country", callback);

// Promisify below!
const getTrailDistancePromise = util.promisify(getTrailDistance);

async function tryGetTrailDistance(trailName) {
  try {
    const trail = await getTrailDistancePromise(trailName);
    console.log(`The ${trail.nickname} is ${trail.miles} miles long!
`);
  } catch (e) {
    console.log(`Trail not found ${trailName}`);
  }
}

/*
Node.js is a JavaScript runtime, an environment that allows us to execute our JavaScript code by converting it into something a computer can understand.
REPLs are processes that read, evaluate, print, and repeat (loop), and Node.js comes with its own REPL we can access in our terminal with the node command.
We run JavaScript programs with Node in the terminal by typing node followed by the absolute or relative path to the file (relative to the working directory in the terminal).
Code can be organized into separate files, or modules. Modules may be used in another file importing them with the require() function.
Core modules are built into the Node.js environment to efficiently perform common tasks.
The console module exports a global console object allowing the terminal to act as a debugging console, similar to the JavaScript console object provided by web browsers.
The process module is a global module that gives access to information about the Node.js runtime environment.
The os module provides 
methods
Preview: Docs Loading link description
to retrieve information about the computer, operating system, and network interfaces.
The util module contains methods used to maintain and debug your code.
*/

// What does the REPL acronym mean
// Read Eval Print Loop

// What do we call modules included with tthe Node.js environment to perform common taks efficiently?
// Core Modules

// Whic Node function allows us to bring modules intoa process?
// require() - It loads another file or module so that we can use it.
