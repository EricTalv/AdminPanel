/*

General Sitemap Routing

*/

module.exports = function(app, passport, controller) {
    // GET The HOME-page
    app.get('/', function(req, res) {
        // *
        // Return results to be rendered as a BULK
        // ON/IF the promise is resolved
        // *
        controller
            .GetDBData()
            .then(results => {

            	var db_data = [];
            	results.forEach((item) => {
            		db_data.unshift(item);
            	})

                res.render('index', {
                    title: 'Index',
                    message: db_data,
                    message2: 'Data Fetched!'
                })
            })
            .catch(error => {
                res.status(500).json({
                    title: "[500] Internal Server Error",
                    error: console.log(error)
                })
            });
    });

    //JSON.stringify(result, null, 4)
    // GET The LOGIN-page
    app.get('/login', function(req, res) {
        res.render('login', {
            title: 'Login',
            message: 'Login Page',
            flash_message: req.flash('loginMessage')
        });
    });

    // Process the login form
    app.post('/login', passport.authenticate('local', {
            successRedirect: '/admin',
            failureRedirect: '/login',
            failureFlash: true
        }),
        function(req, res) {
            if (req.body.remember) {
                req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
                req.session.cookie.expires = false;
            }

            res.redirect('/');
        });

    app.get('/admin', isLoggedIn, function(req, res) {
        res.render('admin', {
            title: req.user.username,
            message: 'aaaaadmin'

        });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } //return next();  }
    res.status(403).send('[403] Forbidden');
}