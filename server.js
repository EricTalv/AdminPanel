var express = require('express');
var mysql = require('mysql');
var app = express();

//Setup Database connection properties 
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sampleDB'
});

//Establish connection to MySQL
connection.connect(function(error) {
    //Check for connection issues
    if (!!error) {
        console.log('[CONNECTION ERROR] ' + error);
    } else {
        console.log('Connection established.');
    };
});

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