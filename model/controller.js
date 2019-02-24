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
        // ///Promises   
        // // Declare query function
        // query(function sendQuery(){
        //     // Send query to Database
        //     connection.query('SELECT * FROM content_data', function(error, results, fields) {
        //         // Catch any errors from query
        //         if (error) return Promise.reject(error);
        //         // Return succesful results
        //         return Promise.resolve(results);
        //     })
        //     // Log that data
        //     .then(function(data){
        //         console.log(data);
        //     })
        //     // Catch any errors
        //     .catch(function(error) {
        //         console.log(error)
        //     })
        // })


        // CallBack   
    

        function onComplete(query_results) {
            var readQuery = query_results;
            return readQuery;
        }

        // Get Query Data
        function CreateQuery(whenDone, CallBack) {
            // Send query
            connection.query('SELECT * FROM content_data', function(error, results, fields) {
                // Check for QUERY errors
                if (error) throw error;
                // Send data to CallBack
                results.forEach((results) => {
                    CallBack(results);
                });
            });
        };
    
       CreateQuery(onComplete, function(results){
            console.log(results);
       });

    }
};