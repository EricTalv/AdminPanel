/*

Controller Database Connections

*/

/* ~Require Modules~*/
var mysql = require('mysql'); // MySQL
var dbconfig = require('./config/database'); // Load database-configuration

/* ~MySQL Properties~ */
//Create connection with MySQL
var connection = mysql.createConnection(dbconfig.connection); // Establish connection with database

connection.query('USE ' + dbconfig.admin_db);

module.exports = {
    read: function (req, res) {

    	var readQuery;    	
    	function onComplete(query_results){//readQuery = query_results;
    		readQuery = query_results;
    		res.send(readQuery);
    		console.log('Query Trasnferred');
    	}

    	function query(whenDone){
    		var query_results; 
            connection.query('SELECT * FROM page', function(error, results, fields) {
                if (error) throw error;
                results.forEach((results) => {
                    whenDone(results);
                });
            });    		
    	};

    	query(onComplete);

    }
};
