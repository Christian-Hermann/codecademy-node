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
