var express = require('express');
var mysql = require('mysql');
var app = express();

//Setup MySQL DataBase connection properties 

//Establish connection to MySQL

//Send a GET-> request to server
//To retrieve data from source 
app.get('/', function(req, res) {
    //give client panel path-> Index.html
    res.sendFile(__dirname + '/view/index.html');    
});

//Use static-folder for static files
app.use('/static/', express.static('./static/.'));

//Upon entering /admin route
app.get('/admin', function (req, res) {
    res.sendFile(__dirname + '/view/index.html');        
});


//Start listening 
app.listen(3000, function(){
    console.log('App Listening on Port:3000');
});



/*

>--Admin authentication Architecture--<


CLIENT Panel ->
-> Request ADMIN Panel -> /admin
->Server needs to check CLIENT 
 session if login has occured

 How does checking work?
 
 When the client goes to /login
 and logs in, the data is then checked
 in the database.
 IF username&&password are correct 
 we need to assign that
 specific session an admin token 
 which will be stored to the database under a 
 temp_data field
 as a randomly generated hash-key along side
 the session ID 
 After that we can redirect to the /admin route

 On the admin route.
 When we are trying to access the admin panel
 the admin panel should check session data and check if it
 has an admin token.
 If there exists an admin token we can compare it in the
 database and if all corresponds we can go forward to the
 admin panel.

 When the admin pane invokes a logout then
 we destroy the admin toke from the database and 
 remove any admin tokens from the session.  

 So the PSEUDO TO DO Code>

 1. Entering /admin route
    1.1. Run keyAuth middleware
     1.1.1. keyAuth middleware should check for an admin token
      1.1.1.1. IF admin token doesnt exist its an automatic 
                un-authorization
     1.1.2. if kA middleware finds admin token it has to 
     compare it to the admin_database, admin_token field.
     1.1.2. if its correct it must also check session
     key and compare it to admin_database session_key field.
      1.1.2.1 if session_key is false go to un-authorized
     1.1.3 if both admin_Token and session_key are correct
     redirect client to /admin access granted.


 2.

SERVER - Check if user has logged in
      -If not redirect to login page
      -If is redirect to admin page

CLIENT Panel - Regular Index Page 
ADMIN Panel - Client panel admistrator 

DATABASE - Store whole Website data
        - Admin Auth Data USR/PW
        - Admistrative CRUD functions for Client
        
HASH ADMIN DATA IN DB


*\