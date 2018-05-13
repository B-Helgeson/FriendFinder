const   friendsData = require("../data/friends"),
        friendsList = friendsData.slice(); //slice method ensures user not a match to themselves

module.exports = function(app) {

  // functionality to return all friends
  app.get('/api/friends', function(req, res) {
    res.json(friendsList);
  });

  // functionality to delete the friends list (if needed)
  app.get('/api/clear', function(req, res) {
    res.json(friendsList);
  });

  // functionality to send a new friend to the application
  app.post('/api/friends', function(req, res) {
    let newUser = req.body;
    console.log(newUser.friendName + "Has been added");
    res.json(getMatch(newUser));
    friendsList.push(newUser);
  });
}

function getMatch (newUser) {
  let userScores = newUser.friendScores,
      minDiff = 41, // Start at the maximum possible difference
      match; // closest match

  friendsList.forEach(friend => {
    let diff = userScores.map((val, index) => Math.abs(friend.friendScores[index] - val)).reduce((acc, val) => acc + val)
    if (diff < minDiff) {
        match = friend
        minDiff = diff
    }
  });
  return match;
  console.log(match);
}
