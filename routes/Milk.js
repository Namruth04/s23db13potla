var express = require('express');
const Milk_controlers= require('../controllers/Milk');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET Milk */
router.get('/', Milk_controlers.Milk_view_all_Page );
// GET request for one Milk.
router.get('/Milks/:id', Milk_controlers.Milk_detail);

module.exports = router;

/* GET detail Milk page */
router.get('/detail',secured, Milk_controlers.Milk_view_one_Page);

/* GET create Milk page */
router.get('/create',secured, Milk_controlers.Milk_create_Page);

/* GET create update page */
router.get('/update',secured, Milk_controlers.Milk_update_Page);

/* GET delete Milk page */
router.get('/delete',secured, Milk_controlers.Milk_delete_Page);
