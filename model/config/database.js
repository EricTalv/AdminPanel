/*

Database connection setup

!! THIS IS SENSITIVE-DATA AND SHOULD BE HIDDEN AND CHANGED ON PRODUCTION !!

*/

module.exports = {
    'connection': {
        'host': 'localhost',
        'user': 'root',
        'password': ''
    },
	'database': 'admin_auth',
    'users_table': 'admin_data'
};