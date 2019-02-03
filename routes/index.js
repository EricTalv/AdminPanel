module.exports = function(app, passport) {

    // GET The HOME-page
    app.get('/', function(req, res, next) {
        res.render('index', {
            title: 'Index',
            message: 'Index Page'
        });
    });

    // GET The LOGIN-page
    app.get('/login', function(req, res, next) {
        res.render('login', {
            title: 'Login',
            message: 'Login Page',
            flash_message: { req.flash('loginMessage')}
        });
    });

    // Process the login form
    app.post('/login', passport.authenticat('local', {
    	successRedirect: '/success',
    	failureRedirect: '/login',
    	failureFlash: true 
    }),
    function (req, res) {
     	console.log('Hi');
     	res.redirect('/');
     } 



    );
};




// var express = require('express');
// var router = express.Router();

// // GET The home-page
// router.get('/', function (req, res, next) {
//   res.render('index', {
//     title: 'Index',
//     message: 'Index Page'
//   });
// });

// // GET The login-page
// router.get('/login', function (req, res, next) {
//   res.render('login', {
//     title: 'Login',
//     message: 'Login Page'
//   });
// });

// module.exports = router;