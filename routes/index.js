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
            flash_message:  req.flash('loginMessage')
        });
    });

    // GET The UNAUTH-page
    app.get('/unauthorized', function(req, res, next) {
        res.render('unauthorized');
    });

    // Process the login form
    app.post('/login', passport.authenticate('local', {
    	successRedirect: '/admin',
    	failureRedirect: '/login',
    	failureFlash: true 
    }),
    function (req, res) {
     	console.log('Hi');
     	res.redirect('/');
     });

    app.get('/admin', isLoggedIn, function (req, res) {
    	res.render('/admin', {
    		title: 'Admin',
    		message: 'Admin page'
    	});
    });

    app.get('/logout', function (req, res) {
    	req.logout();
    	res.redirect('/');
    });
};

// route middleware
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) { return next(); }
	res.status(403).render();
}
