/// Require modules
var express = require('express');
var path = require('path');
//var http = require('http');
var mysql = require('mysql');
var passport = require('passport');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
var morgan = require('morgan');

/// Routes and Configs
 var index = require('./routes/index');
// var database = require('./models');
// var user = require('./routes/user');
// var home = require('./routes/home');
// var application = require('./routes/application');
require('./config/passport')(passport) // pass passport for configuration;

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

// Set console logger
app.use(morgan('dev')); //log every request to the console

/* ~Parsers~ */
// Use urlencoded to deal with incoming Requests as Strings/arrays
app.use(bodyParser.urlencoded({
    extended: false
}));
// Parse incoming http-form data
app.use(bodyParser.json());
// Parse cookie data
app.use(cookieParser());


/* ~Passport And Session Properties~ */
// Session 
app.use(session({
    // secret key for encrypting cookies
    secret: 'withaspiritsoundsystem',
    // storing sessions
    resave: false,
    // forces UnInitializedSessions to be saved in store 
    saveUninitialized: false,
    // Cookie should be set true on HTTPS
    cookie: {
        secure: false
    }
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// flash messages
app.use(flash());

// Route to homepage 
// app.use('/', index);

require('./routes/route')(server, passport); // pass passport for configuration

// Error Handeling
app.use(function(error, req, res, next) {
    console.error(error.stack);
    res.status(500).send('[500]Something went wrong!');
});

/* ~Open Server ports~ */
// Start listening 
app.listen(port, function(error){
    // Error Check 
    if (!error) {
      console.log('App Listening on Port: %s', port);
    } else { console.log(error); }
});