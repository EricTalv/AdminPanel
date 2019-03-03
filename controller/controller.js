/*

Controller Database Connections

*/

/* ~Require Modules~*/
var mysql = require('mysql'); // MySQL
var dbconfig = require('./model/database'); // Load database-configuration

/* ~MySQL Properties~ */
// Create connection with MySQL
var connection = mysql.createConnection(dbconfig.connection); // Establish connection with database

// Use database 
connection.query('USE ' + dbconfig.database);

module.exports = {
    GetDBData: function () {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM content_data',
                (error, results) => {
                    // Check for QUERY errors
                    if (error) reject(error);
                    else resolve(results);
                });
        });
    }
}