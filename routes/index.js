var express = require('express');
var router = express.Router();

// GET The home-page
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Index',
    message: 'Index Page'
  });

});

// GET The login-page
router.get('/login', function (req, res, next) {
  res.render('login', {
    title: 'Login',
    message: 'Login Page'
  });
});

module.exports = router;