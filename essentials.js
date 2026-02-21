// THE EVENTS MODULE
// Here we require in the 'events' module and save a reference to it in an events variable
let events = require("events");

let listenerCallback = (data) => {
  console.log("Celebrate " + data);
};

let myEmitter = new events.EventEmitter();

myEmitter.on("celebration", listenerCallback);

myEmitter.emit("celebration", "party-time");

// USER INPUT/OUTPUT
let { testNumber } = require("./game.js");

process.stdout.write(
  'I\'m thinking of a number from 1 through 10. What do you think it is? \n(Write "quit" to give up.)\n\nIs the number ... '
);

let playGame = (userInput) => {
  let input = userInput.toString().trim();
  testNumber(input);
};

// ERRORS
const api = require("./api.js");

// An error-first callback
let errorFirstCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong. ${err}\n`);
  } else {
    console.log(`Something went right. Data: ${data}\n`);
  }
};

api.errorProneAsyncApi("problematic input", errorFirstCallback);

// THE BUFFER MODULE
// import the Buffer module
const { Buffer } = require("buffer");

// allocate buffer of size 15 filled with 'b'
const bufferAlloc = Buffer.alloc(15, "b");

// create buffer1 with 'Node' and buffer2 with '.js'
const buffer1 = Buffer.from("Node");
const buffer2 = Buffer.from(".js");

// combine buffer1 and buffer2
const bufferArray = [buffer1, buffer2];
const bufferConcat = Buffer.concat(bufferArray);

// translate buffer to string
const bufferString = bufferConcat.toString();

// uncomment the appropriate `console.log()` to ouput to console
console.log(bufferAlloc);
console.log("Buffer 1:", buffer1, "Buffer 2:", buffer2);
console.log(bufferConcat);
console.log(bufferString);

// THE FS MODULE
const fs = require("fs");

let secretWord = "cheeseburgerpizzabagels";

fs.readFile("finalFile.txt", "utf8", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
