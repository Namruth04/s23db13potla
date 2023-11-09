var express = require('express');
const costume_controlers= require('../controllers/Milk');
var router = express.Router();
/* GET costumes */
router.get('/', costume_controlers.Milk_view_all_Page );
module.exports = router;
