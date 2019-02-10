/*

Controller Database Connections

*/

/* ~Require Modules~*/
var mysql = require('mysql'); // MySQL
var dbconfig = require('./config/database'); // Load database-configuration

/* ~MySQL Properties~ */
//Create connection with MYSQL
var connection = mysql.createConnection(dbconfig.connection); // Establish connection with database

connection.query('USE ' + dbconfig.admin_db);

module.exports = {
    read: function() {

        connection.query('SELECT * FROM page', function(error, results, fields) {
            if (error) throw error;
            results.forEach((results) => {
                return results;
            });
        });
    }
};

/*

A-jax - asynchronous
..sending the request(or receiveng the response)
is taken out of the normal execution flow.

*/

//// EXECUTION FLOW - Example
function foo() {
	// 1. Object is declared
	var httpRequest = new XMLHttpRequest(); // Declare an XMLHttp object
    // 3. Make a GET request
    httpRequest.open('GET', "/echo/json"); // open request
    // 4. httpRequest is sent 
    httpRequest.send(); // sending the request
    // 2. return the response text 
    return httpRequest.responseText; // ..is executed 
     								 // before the function passed 
     								 // as success callback was even called.
}

// 5
var result = foo(); // always ends up being 'undefined'

//// EXECUTION FLOW - Example 2
function getFive() {
	var a; // 1. Declared 
	setTimeout(function(){ // 3. Do the func
		a=5;
	}, 10);
	return a; // 2. Return Declared 
}













