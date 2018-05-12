const   friendsData = require("../data/friends");

module.exports = function(app) {

  // API GET to return all friends data
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // Accepts API POST requests with new user data
  app.post("/api/friends", function(req, res) {

    let userInput = req.body,
        totalDifference = 0,
        allDifferences = 0;

    for (var i = 0; i<(friendsData.length-1); i++){
      for (var q = 0; q<10; q++){
        totalDifference += Math.abs(friendsData[i].friendscores[q] - userInput[q]);
      }
    
      allDifferences.push(totalDifference);
      totalDifference = 0;

    }

    
    let match = friendsData[allDifferences.indexOf(Math.min.apply(null, allDifferences))];

    res.send(match);
    console.log(match);

  });


  app.post("/api/clear", function() {
    friendsData = []
    console.log(friendsData);
  });
};
