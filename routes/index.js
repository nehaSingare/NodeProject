var express = require('express');
var router = express.Router();
const middle = require('../middleware/middleCheck');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/details',middle,function(req, res, next) {
  res.render('users', { title: 'Detail List' });
});

module.exports = router;
