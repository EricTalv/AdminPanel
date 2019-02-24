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

        // Declare query function
        query(function sendQuery(){
            // Send query to Database
            connection.query('SELECT * FROM content_data', function(error, results, fields) {
                // Catch any errors from query
                if (error) return Promise.reject(error);
                // Return succesful results
                return Promise.resolve(results);
            })
            // Log that data
            .then(function(data){
                console.log(data);
            })
            // Catch any errors
            .catch(function(error) {
                console.log(error);
            })
        })


        ////CALLBACK HELL   
        // var readQuery;
        // function onComplete(query_results) {
        //     readQuery = query_results;
        //     console.log('Query Trasnferred');
        //     console.log(readQuery);
        // }

        // function query(whenDone) {
        //     var query_results;
        //     connection.query('SELECT * FROM content_data', function(error, results, fields) {
        //         if (error) throw error;
        //         results.forEach((results) => {
        //             whenDone(results);
        //         });
        //     });
        // };
        // query(onComplete);
    }
};