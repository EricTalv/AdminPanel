/*

Controller Database Connections

*/

/* ~Require Modules~*/
var mysql = require('mysql'); // MySQL
var dbconfig = require('./config/database'); // Load database-configuration

/* ~MySQL Properties~ */
//Create connection with MYSQL
var connection = mysql.createConnection(dbconfig.connection); // Establish connection with database

module.exports.msg = "hello";