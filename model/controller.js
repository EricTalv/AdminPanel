var mysql = require('mysql'); // MySQL
var dbconfig = require('./config/database'); // Load database-configuration

// Create DB && MySQL Connection
var connection = mysql.createConnection(dbconfig.connection);

// Set DataBase To use
connection.query('USE ' + dbconfig.content_db);

module.exports = function(admin) {
	// Read the data from the database
    function ReadData() {
        connection.query("SELECT * FROM content_data");
    }
}