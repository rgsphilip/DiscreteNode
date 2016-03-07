var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.updateStatus = function(req, res) {
    var userId = req.user._id;
    var user = req.user;
    var lastQAnswered = req.body.lastQAnswered;
    user.progress.lastQAnswered = lastQAnswered;

    User.update({"_id":userId}, user,
        function (err, numberAffected) {
            if (err) return console.log(err);
            console.log('Updated user with id' + userId + "to new lastQAnswered " + lastQAnswered);
            return res.send(202);
        }
    );
}