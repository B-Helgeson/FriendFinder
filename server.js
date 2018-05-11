// Constants for required npm packages
const   express = require("express"),
        bodyparser = require("body-parser"),
        path = require("path"),

        PORT = process.env.PORT || 8080;

        app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing Logic
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Listener to start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});