/*

Controller Database Connections

*/

/* ~Require Modules~*/
var mysql = require('mysql'); // MySQL
var dbconfig = require('./config/database'); // Load database-configuration

/* ~MySQL Properties~ */
// Create connection with MySQL
var connection = mysql.createConnection(dbconfig.connection); // Establish connection with database

// Use database 
connection.query('USE ' + dbconfig.database);

module.exports = {
        read: function() {

            // Declare Query Function
            function query(whenDone) {
                // Create query            
                connection.query('SELECT * FROM content_data', function(error, results, fields) {
                    // Check for errors
                    if (error) return Promise.reject(err);
                    // Return Promise Results
                    return Promise.resolve(results);
                });
            };

            // What to do after Promise
            query(onComplete).then(function(data) {
                //Return the data
                return data
                    // Catch any errors
            }).catch(function(err) {
                    throw (err)
                });

                // var readQuery;    	
                // function onComplete(query_results){
                // 	readQuery = query_results;
                // 	res.send(readQuery);
                // 	console.log('Query Trasnferred');
                // }

                // function query(whenDone){
                // 	var query_results; 
                //        connection.query('SELECT * FROM page', function(error, results, fields) {
                //            if (error) throw error;
                //            results.forEach((results) => {
                //                whenDone(results);
                //            });
                //        });    		
                // };
                // query(onComplete);
            }
        };