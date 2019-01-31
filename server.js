var express = require('express');
var mysql = require('mysql');
var app = express();

//Setup Database connection properties 
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'sampleDB'
});

//Establish connection
connection.connect(function(error) {
    //Check for connection issues
    if (!!error) {
        console.log('Error: ' + error);
    } else {
        console.log('Connection established.');
    };
});

//Send data to app
app.get('/', function(req, resp) {
    //Send a MYSQL Query to ->sampleDataBase
    connection.query("SELECT * FROM sampleDB", function(error, rows, fields) {
        //Callback when query has been done
        //Check for query errors
        if (!!error) {
            console.log('Error: ' + error);
        } else {
            console.log('Query Was Succesful');
        };
    });
});

app.listen(3000);