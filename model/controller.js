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

        function createQuery() {
            return new Promise((resolve, reject) => {
                connection.query('SELECT * FROM content_data', (error, results, fields) => {
                    // Check for QUERY errors
                    if (error) return reject(error);
                    results.forEach((data) => {
                        return resolve(data)
                    });
                });
            });
        }
        
        createQuery()
            .then((data) => {
                console.log(data);
                return data;
            })
            .catch((err) => {
                console.log(err);
            });
    }

}