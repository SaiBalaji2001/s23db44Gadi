var Drinks = require("../models/Drinks");
// List of all Drinks
exports.Drinks_list = async function (req, res) {
    try {
        theDrinks = await Drinks.find();
        res.send(theDrinks);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Drinks.
// exports.Drinks_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: Drinks detail: ' + req.params.id);
// };

// Handle Drinks create on POST.
exports.Drinks_create_post = async function (req, res) {
    console.log(req.body);
    let document = new Drinks();
    document.Drinks_name = req.body.Drinks_name;
    document.Drinks_size = req.body.Drinks_size;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Drinks delete form on DELETE.

exports.Drinks_delete = async function (req, res) {
    console.log("delete " + req.params.id);
    try {
        result = await Drinks.findByIdAndDelete(req.params.id);
        console.log("Removed " + result);
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Drinks update form on PUT.
exports.Drinks_update_put = function (req, res) {
    res.send("NOT IMPLEMENTED: Drinks update PUT" + req.params.id);
};

// VIEWS
// Handle a show all view
exports.Drinks_view_all_Page = async function (req, res) {
    try {
        theDrinks = await Drinks.find();
        res.render("Drinks", {
            title: "Drinks Search Results",
            results: theDrinks,
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Drinks.
exports.Drinks_detail = async function (req, res) {
    console.log("detail" + req.params.id);
    try {
        result = await Drinks.findById(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle flower update form on PUT.
exports.Drinks_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await Drinks.findById(req.params.id);
        // Do updates of properties
        if (req.body.Drinks_name)
            toUpdate.Drinks_name = req.body.Drinks_name;
        if (req.body.Drinks_size) toUpdate.Drinks_size = req.body.Drinks_size;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result);
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// Handle a show one view with id specified by query

exports.Drinks_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id);
    try {
     result = await Drinks.findById(req.query.id);
        res.render("DrinksDetails", {
            title: "Drinks Details",
            toShow: result,
        });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.

// No body, no in path parameter, no query.

// Does not need to be async
exports.Drinks_create_Page = function (req, res) {
    console.log("create view");
    try {
        res.render("DrinksCreate", { title: "Drinks Create" });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id

exports.Drinks_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id);
    try {
        let result = await Drinks.findById(req.query.id);
        res.render("DrinksUpdate", {
            title: "Drinks Update",
            toShow: result,
        });

    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query

exports.Drinks_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id);
    try {
        result = await Drinks.findById(req.query.id);
        res.render("DrinksDelete", {
            title: "Drinks Delete",
            toShow: result,
        });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};