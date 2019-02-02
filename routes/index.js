var express = require('express');
var router = express.Router();

// GET The home-page
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
