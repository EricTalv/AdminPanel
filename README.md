# AdminPanel

AdminPanel testing environment.
This is a project to study how websites utilize adminPanels 
and how We can manipulate a client-side websites elements with
simple CRUD rules.

# Pre-requisites

Run a xampp *Apache + MySQL* servers 

You will need to create your own DataBase on
localhost/phpmyadmin or just create MySQL script
and change config/database.js to your database.

*NOTICE:* _This is not for production use,_ 
password and name encryption is not yet implemented.

# Available Scripts

Root directory is `/AdminPanel`

To run **localhost** just run command:

`npm start` OR `node server.js`

Localhost will listen at localhost:3000

# Sitemap

+ `/admin` <- Depends if your session is authorized
+ `/login` <- Can login from here, depends on data from database
+ ` /    ` <- index as in home page 
