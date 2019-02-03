/// Require modules
var express = require('express');
var path = require('path');
//var http = require('http');
var mysql = require('mysql');
var passport = require('passport');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

/// Routes and Configs
// var index = require('./routes/index');
// var database = require('./models');
// var user = require('./routes/user');
// var home = require('./routes/home');
// var application = require('./routes/application');
// var passportConfig = require('./config/passport');

// Set app Listening port 
var port = process.env.PORT || 3000;

// Initialize exrpess
var app = express();

// DB Config
// var db = require('./config/keys').

/* ~Static Files~ */
// store static files (css, etc.)
app.use(express.static(path.join(__dirname, 'public')));
//app.locals.basedir = path.join(__dirname, 'public');

/* ~View Engine~ */
// view engine setup
app.set('view engine', 'pug');
// Set view path
app.set('views', path.join(__dirname, 'views'));

/* ~Parsers~ */ 
// Use urlencoded to deal with incoming Requests as Strings/arrays
// app.use(bodyParser.urlencoded({ extended: false }));
// Parse incoming http-form data
// app.use(bodyParser.json());
// Parse cookie data
// app.use(cookieParser());

/* ~Passport And Session Properties~ */
// Session 
app.use(session({
  // secret key for encrypting cookies
   secret: 'withaspiritsoundsystem',
  // storing sessions
   resave: false,
  // forces UnInitializedSessions to be saved in store 
   saveUninitialized: true,
  // Cookie should be set true on HTTPS
   cookie: { secure: false } 
}));

// store session data



// Initialize Passport
// app.use(passport.initialize());

// Route to homepage 
app.use('/', index);

// Create database Tables
database 
        .sequelize
        //.sync()
        .complete(function (error) {
            if (error) {
                  console.error(error.stack);
                  res.status(500).send('[500]Something went wrong!');  
            } else {
              http.createServer(app).listen(app.get('port'), function() {
                console.log('Listening: ' + app.get('port'));
              });
            }
        });

// Error Handeling
app.use(function (error,req,res,next) {
    console.error(error.stack);
    res.status(500).send('[500]Something went wrong!');  
});

/* ~Open Server ports~ */
// // Start listening 
// app.listen(port, function(error){
//     // Error Check 
//     if (!error) {
//       console.log('App Listening on Port: %s', port);
//     } else { console.log(error); }
// });
