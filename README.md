# AdminPanel

AdminPanel testing environment.
This is a project to study how websites utilize adminPanels 
and how We can manipulate a client-side websites elements with
simple CRUD rules.

-----

Asof CCv3 being created
The admin panel is going to become a lowend 
framework Mindset, this concept is a work-in-progress

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

# Architecture

`CLIENT`  /VIEW:

The client sees a simple page with a vertical post line.

`ADMIN`   /CONTROLLER:

The admin gets to change, add, update or delete the client-side post line.

`SERVER`  /MODULE:

Assigns all routes, view engines, databases and extra authentication configs.
