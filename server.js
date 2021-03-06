// Constants for required npm packages
const   express = require("express"),
        bodyParser = require("body-parser"),
        path = require("path"),
        PORT = process.env.PORT || 3006;
        app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing Logic
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener to start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});