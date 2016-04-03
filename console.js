var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/precipe');
var REPL = require("repl");

var repl = REPL.start("> ");

// model requirements
repl.context.User = require("../models/user");

// listen for an `exit` event
repl.on("exit", function () {
  console.log("Cookie!");
  // disconnect the database connection
  mongoose.disconnect(function() {
    // exit the repl
    process.exit();
  });
})