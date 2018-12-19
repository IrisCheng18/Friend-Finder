var friendsArray = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;

        var sumArray = [];
             
        for (var j = 0; j < friendsArray.length; j++) {
            var sum = 0;

            for (var i = 0; i < newFriend.scores.length; i++) {
                sum += Math.abs(parseInt(newFriend.scores[i]) - parseInt(friendsArray[j].scores[i]));
            }

            sumArray.push(sum);
        };
        
        var index = sumArray.indexOf(Math.min(...sumArray));
        res.json({
            name: friendsArray[index].name,
            photo: friendsArray[index].photo
        });
    });
};