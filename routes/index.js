var user = require('../controllers/userStatus.js')

module.exports = function(app, passport) {

    /* GET home page. */
    app.get('/', isLoggedIn, function(req, res, next) {
        res.render('dashboard', { title: 'Express' });
    });

    //logging in
    app.get('/login', function(req, res) {
        res.render('login', { message: req.flash('loginMessage')});
    });

    //app.post('/signup', do all passport stuff here...)
    
    //profile
    app.get('/profile', isLoggedIn,  function(req, res) {
        res.render('profile', {
            user : req.user
        });
    });
    
    //logout
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/dashboard',  isLoggedIn, function(req, res, next) {
        res.render('dashboard', { 
            user : req.user 
         });
    });

    app.get('/learn', isLoggedIn, function(req, res, next) {
        res.render('learn', { 
            user: req.user,
            lastQAnswered: req.user.progress.lastQAnswered
        });
    });

    app.get('/challenge', isLoggedIn, function(req, res, next) {
        res.render('challenge', { 
            user: req.user
        });
    });

    app.get('/what', function(req, res, next) {
        res.render('what', { title: 'Express' });
    });

    app.get('/profile', function(req, res, next) {
        res.render('profile', { 
            user: req.user
        });
    });


    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
    // the callback after facebook has authenticated the user
    
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
    }));
        
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
     }));

     app.put('/profile/:id', user.updateStatus);     

}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
        
    res.redirect('/login');
}


//module.exports = router;
