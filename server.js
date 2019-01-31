var express = require('express');
var express = require('mysql');

var connect = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'sampleDB'
});

