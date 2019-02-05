/*

Passport and database connections

*/

/* ~Require Modules~*/
var LocalStrategy = require('passport-local').Strategy; // Load passport strategy
var mysql = require('mysql');
// var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('./database');

/* ~MySQL Properties~ */
//Create connection with MYSQL
var connection = mysql.createConnection(dbconfig.connection);

// Set database
connection.query('USE ' + dbconfig.database);

// Expose to our server
module.exports = function(passport) {
    /* Passport Session Setup */

    // serializeUser drtermines which data of the user obj should be stored to the session
    passport.serializeUser(function(user, done) {
    	// We save the user.id in the session 
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
    	//done(null, user);
        connection.query("SELECT * FROM admin_data WHERE id = ? " ,[id],
            function(err, rows) {
                done(err, rows[0]);          
            });
    });

    passport.use('local', new LocalStrategy({
    	usernameField: 'username',
    	passwordField: 'password',
    	passReqToCallback: true 	
    },
    function(req, username, password, done) {
        connection.query("SELECT * FROM admin_data WHERE username = ? ",[username],
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
    }));
};