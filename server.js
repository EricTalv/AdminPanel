// Require modules
var express = require('express');
var path = require('path');
var http = require('http');
var mysql = require('mysql');
var passport = require('passport');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

// Routes and Configs
var routes = require('./routes');
var user = require('./routes/user');
var home = require('./routes/home');
var passportConfig = require('./config/passport');
var application = require('./routes/application');

// Set app Listening port 
var port = process.env.PORT || 3000;

// Initialize exrpess
var app = express();

// store static files (css, etc.)
app.use(express.static(path.join(__dirname, 'static')));
//app.locals.basedir = path.join(__dirname, 'static');

// view engine setup
app.set('view engine', 'pug');
// Set view path
app.set('views', path.join(__dirname, 'views'));

// Use urlencoded to deal with incoming Requests as Strings/arrays
app.use(express.urlencoded());
// Parse incoming http-form data
app.use(express.bodyParser());
// Parse cookie data
app.use(express.cookieParser());




// Start listening 
app.listen(port, function(error){
    if (!error) {
      console.log('App Listening on Port: %s', port);
    } else { console.log(error); }
});
