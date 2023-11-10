var express = require('express');
const Milk_controlers= require('../controllers/Milk');
var router = express.Router();
/* GET Milk */
router.get('/', Milk_controlers.Milk_view_all_Page );
// GET request for one Milk.
router.get('/Milks/:id', Milk_controlers.Milk_detail);
module.exports = router

