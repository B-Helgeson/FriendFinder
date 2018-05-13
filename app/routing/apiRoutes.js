const   friendsData = require("../data/friends"),
        friendsList = friendsData.slice();

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
  let userScores = newUser.friendScores;
  let match;
  let oldDif;

  // leep through each friend in the friendsList array
  for (let i = 0; i < friendsList.length; i++) {
      let newDif = 0;

      // loop through each answer for each friend in the friends list array
      for (let j = 0; j < 10; j++) {
          // compare user input answers vs friend answer for each friend and each question
          let answer1 = parseInt(userScores[j]);
          let answer2 = parseInt(friendsList[i].friendScores[j]);
          let difference = Math.abs(answer1 - answer2);
          newDif += difference;
      }

      if(oldDif == undefined) {
          oldDif = newDif;
      }

      if(oldDif >= newDif) {
          oldDif = newDif;
          match = friendsList[i];            
      }
  }
  return match;
} 
