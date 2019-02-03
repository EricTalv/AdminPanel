/*

Here we will instatniate database tables 

*/

/* Requiring Modules */
var fs = require('fs'); // FS- for working with file-systems on PC
var path = require('path'); // for working with file/dir paths
var mSequelize = require('sequelize'); // Sequelize as DB ORM
var lodash = require('lodash'); // LIB for better arrays and more

// connect sequelize to DB
var sequelize = new mSequelize('sampleDB', 'root', null); //DB USR PW
