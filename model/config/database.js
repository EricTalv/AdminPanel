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
	'admin_database': 'admin_auth',
    'admin_DataTable': 'admin_data'
};