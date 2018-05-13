const path = require("path");

module.exports = function(app) {

  // direct to survey page if route called
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // default to home if "/home" or any other unrecognized address is entered
  app.get("*"||"/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};