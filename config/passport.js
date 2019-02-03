/*

Passport and database connections

*/

/* ~Require Modules~*/
var LocalStrategy = require('passport-local').Strategy; // Load passport strategy
var mysql = require('mysql');

/* ~MySQL Properties~ */
//Create connection with MYSQL
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

// Set database
connection.query('USE admin_auth');

module.exports = function(passport) {
        /* Passport Session Setuo */

        passport.serializeUser(function(user, done) {
            done(null, user.id);
        });

        passport.deserializeUser(function(id, done) {
            connection.query("SELECT * FROM admin_data WHERE id = " +
                id,
                function(err, rows) {
                    done(err, rows[0]);
                });
        });

        passport.use('local', new LocalStrategy(function(req, username, password, done) {
                        connection.query("SELECT * FROM `admin_data` WHERE" +
                            " `username` = '" + username + "'",
                            function(err, rows) {
                                if (err) {
                                    return done(err);
                                }
                                if (!rows.length) {
                                    return done(null, false, req.flash('loginMessage', 'Ufalse credentials'));
                                }
                                if (!(rows[0].password == password)) {
                                    return done(null, false, req.flash('loginMessage', 'Pfalse credentials'));
                                }
                                return done(null, rows[0]);
                            });
                    };