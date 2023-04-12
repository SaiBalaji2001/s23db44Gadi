var express = require('express');
const Drinks_controller= require('../controllers/Drinks');
var router = express.Router();

/* GET flowers */
router.get('/', Drinks_controller.Drinks_view_all_Page);

// GET request for one flower.
router.get('/Drinks/:id',Drinks_controller.Drinks_detail);

/* GET detail costume page */
router.get('/detail', Drinks_controller.Drinks_view_one_Page);

/* GET create costume page */
router.get('/create', Drinks_controller.Drinks_create_Page);

/* GET create update page */
router.get('/update', Drinks_controller.Drinks_update_Page);

/* GET delete costume page */
router.get('/delete', Drinks_controller.Drinks_delete_Page);

module.exports = router;