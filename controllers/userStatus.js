var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.updateStatus = function(req, res) {
    var userId = req.user._id;
    var user = req.user;
    user.modules[req.body.module].lastQAnswered = req.body.lastQAnswered;
    user.modules[req.body.module].count = req.body.count;
    user.modules[req.body.module].total = req.body.total;
    if (req.body.completed) {
        user.modules[req.body.module].completed = req.body.completed;
    }
    User.update({"_id":userId}, user,
        function (err, numberAffected) {
            if (err) return console.log(err);
            return res.send(202);
        }
    );
}