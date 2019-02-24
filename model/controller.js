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

        query(function sendQuery(){
            connection.query('SELECT * FROM content_data', function(error, results, fields) {
                if (error) return Promise.reject(error);
                return Promise.resolve(results);
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