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

//Establish connection
connection.connect(function(error) {
    //Check for connection issues
    if (!!error) {
        console.log('[CONNECTION ERROR] ' + error);
    } else {
        console.log('Connection established.');
    };
});

//Send data to app
app.get('/', function(req, resp) {
    //Send a MYSQL Query to ->sampleDataBase
    connection.query("SELECT * FROM sampleTable", function(error, rows, fields) {
        //Callback when query has been done
        //Check for query errors
        if (!!error) {
            console.log('[QUERY ERROR] ' + error);
        } else {
            console.log('Query Was Succesful');
        };
    });
});

app.listen(1337, function(){
    console.log('App Listening on Port:1337');
});