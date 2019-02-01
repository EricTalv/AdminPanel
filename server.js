var express = require('express');
var mysql = require('mysql');
var app = express();

//Setup MySQL DataBase connection properties 

//Establish connection to MySQL

//Send a GET-> request to server
//To retrieve data from source 
app.get('/', function(req, res) {
    //give client panel path-> Index.html
    res.sendFile(__dirname + '/view/index.html');    
});

//Use static-folder for static files
app.use('/static/', express.static('./static/.'));

//Login check 
function requireLogin(req,res,next) {
    //Check if user session is logged in
    if (req.session.loggedIn) {
        next();
    } else {
        res.redirect('/login');
    }
}

//Apply the requireLogin middleware to
//all admin routes
app.all('/admin/*', requireLogin, function (req,res,next) {
    next();
});

app.get('/admin', function (req, res) {
    res.send('Admin Granted');
})

//Start listening 
app.listen(3000, function(){
    console.log('App Listening on Port:3000');
});