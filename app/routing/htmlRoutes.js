const path = require("path");

module.exports = function(app) {

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
  });

  // default to home if "/home" or any other value is entered
  app.get("*"||"/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};