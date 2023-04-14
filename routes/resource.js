var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Drinks_controller = require('../controllers/Drinks');
/// API ROUTE ///
// GET resources base.
//router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/Drinks', Drinks_controller.Drinks_create_post);
// DELETE request to delete Costume.
router.delete('/Drinks/:id', Drinks_controller.Drinks_delete);
// PUT request to update Costume.
router.put('/Drinks/:id', Drinks_controller.Drinks_update_put);
// GET request for one Costume.
router.get('/Drinks/:id', Drinks_controller.Drinks_detail);
// GET request for list of all Costume items.
router.get('/Drinks', Drinks_controller.Drinks_list);
module.exports = router;