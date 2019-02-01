var express = require('express');
var mysql = require('mysql');
var app = express();

//Setup MySQL DataBase connection properties 

//Establish connection to MySQL

//Send a GET-> request to server
//To retrieve data from source
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');    
});

//Use static-folder for static files
app.use('/static/', express.static('./static/.'));

//Start listening 
app.listen(3000, function(){
    console.log('App Listening on Port:3000');
});