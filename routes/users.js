var express = require('express');
var router = express.Router();
const middle = require('../middleware/middleCheck');

/* GET users listing. */
router.get('/',middle,function(req, res, next) {
  res.render('users', { title: 'User List' });
});



module.exports = router;
