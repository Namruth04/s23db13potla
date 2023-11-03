var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('milk', { title: 'Search Results milk' });
});

module.exports = router;