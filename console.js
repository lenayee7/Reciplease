var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/precipes');
var REPL = require("repl");

var repl = REPL.start("> ");

// model requirements
repl.context.User = require("./models/user");
repl.context.Recipe = require('./models/recipe');

// listen for an `exit` event
repl.on("exit", function () {
  console.log("Cookie!");
  // disconnect the database connection
  mongoose.disconnect(function() {
    // exit the repl
    process.exit();
  });
})