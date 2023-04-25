var express = require('express');
Drinks_controller = require('../controllers/Drinks');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

/* GET flowers */
router.get("/", Drinks_controller.Drinks_view_all_Page);
module.exports = router;
// GET request for one flower.
//router.get("/Drinks/:id", Drinks_controller.Drinks_detail);

/* GET detail costume page */
router.get("/detail", Drinks_controller.Drinks_view_one_Page);

/* GET create costume page */
router.get("/create", Drinks_controller.Drinks_create_Page);

/* GET create update page */
router.get("/update",secured, Drinks_controller.Drinks_update_Page);

/* GET delete costume page */
router.get("/delete", Drinks_controller.Drinks_delete_Page);
