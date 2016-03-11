var user = require('../controllers/userStatus.js')

module.exports = function(app, passport) {

    /* GET home page. */
    app.get('/', isLoggedIn, function(req, res, next) {
        res.render('dashboard', { 
            user : req.user,
            completed: req.user.modules.learnSets.completed
        });
    });

    //logging in
    app.get('/login', function(req, res) {
        res.render('login', { message: req.flash('loginMessage')});
    });

    //app.post('/signup', do all passport stuff here...)
    
    //profile
    app.get('/profile', isLoggedIn,  function(req, res) {
        console.log(Math.floor((req.user.modules.learnSets.count / req.user.modules.learnSets.total)*100))
        res.render('profile', {
            user : req.user,
            percentLearnSets : (Math.floor((req.user.modules.learnSets.count / req.user.modules.learnSets.total)*100)),
            percentChallengeSets : (Math.floor((req.user.modules.challengeSets.count / req.user.modules.challengeSets.total)*100))
        });
    });
    
    //logout
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/dashboard',  isLoggedIn, function(req, res, next) {
        res.render('dashboard', { 
            user : req.user,
            completed: req.user.modules.learnSets.completed
         });
    });

    app.get('/learn', isLoggedIn, function(req, res, next) {
        res.render('learn', { 
            user: req.user,
            lastQAnswered: req.user.modules.learnSets.lastQAnswered,
            completed: req.user.modules.learnSets.completed
        });
    });

    app.get('/challenge', isLoggedIn, finishedLearn, function(req, res, next) {
        res.render('challenge', { 
            user: req.user,
            lastQAnswered: req.user.modules.challengeSets.lastQAnswered,
            completed: req.user.modules.challengeSets.completed
        });

    });

    app.get('/what', function(req, res, next) {
        res.render('what', { title: 'Express' });
    });

    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
    // the callback after facebook has authenticated the user
    
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/dashboard',
            failureRedirect : '/'
    }));
        
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    
    app.get('/notReady', function(req, res) {
        res.render('notReady');
    });
    
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/dashboard',
                    failureRedirect : '/'
     }));

     app.put('/profile/:id', user.updateStatus);     

}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
        
    res.redirect('/login');
}

function finishedLearn(req, res, next) {
    if (req.user.modules.learnSets.completed === "complete")
        return next();
    res.redirect('/notReady');
}
//module.exports = router;
