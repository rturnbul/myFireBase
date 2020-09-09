"use strict";

// Import the DataFire library.
let datafire = require('datafire');

// Create a new Action.
module.exports = new datafire.Action({
  description: "Greets the user.",
  inputs: [{
    title: "name",
    type: "string",
    maxLength: 100,
    default: "world"
  }],
  handler: input => {
    return "Hellot, " + input.name;
  },
});