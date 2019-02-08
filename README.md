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

# Architecture

`CLIENT`  /VIEW:

The client sees a simple page with a vertical post line.

`ADMIN`   /CONTROLLER:

The admin gets to change, add, update or delete the client-side post line.

`SERVER`  /MODULE:

Assigns all routes, view engines, databases and extra authentication configs.

# Philosophy, mostly just me trying to figure stuff out

If we add any _Extra html elements_, could we instantly **push** them into the admin-panel?
- Every element would have different properties to manipulate, we might need to assign rules.

Okay so lets assume we have a page where theres just one post-div and theres a p-paragraph inside it.
We want the admin panel to show what is configurable/editable on the front end SO
this would mean on the admin panel we would have these options:
 + post-div
 we should be able to change whatever is inside the post-div such as: _font-family, bg, position, columns etc._
 + p-paragraph
 we can change the text the font the color the usual inside here.

this is a bit complex.

The easier way to do this is to do it simply.
 we create all elements in the html and afterwards assign 
 editable elements individually.
so if we would have 3 different p-paragraphs, we could make only 2 accessible by the
admin-panel editor, leaving the third one static.

