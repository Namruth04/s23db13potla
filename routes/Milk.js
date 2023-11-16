var express = require('express');
const Milk_controlers= require('../controllers/Milk');
var router = express.Router();
/* GET Milk */
router.get('/', Milk_controlers.Milk_view_all_Page );
// GET request for one Milk.
router.get('/Milks/:id', Milk_controlers.Milk_detail);

module.exports = router;

/* GET detail Milk page */
router.get('/detail', Milk_controlers.Milk_view_one_Page);

/* GET create Milk page */
router.get('/create', Milk_controlers.Milk_create_Page);