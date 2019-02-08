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
	'admin_db': 'admin_auth',
    'admin_DataTable': 'admin_data',
    'content_db' : 'content_db',
    'content_DataTable' : 'content_data'
};