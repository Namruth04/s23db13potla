const MilkScheme = require('../models/MilkScheme');
var Milk = require('../models/MilkScheme');
// List of all Milks
exports.Milk_list = async function (req, res) {
    try {
        theMilks = await Milk.find();
        res.send(theMilks);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Milk.
exports.Milk_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Milk detail: ' + req.params.id);
};

// Handle Milk create on POST.
exports.milk_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Milk();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Milk_type":"goat", "cost":12, "size":"large"}

    document.name = req.body.name;
    document.price = req.body.price;
    document.type = req.body.type;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle Milk delete form on DELETE.
exports.Milk_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Milk delete DELETE ' + req.params.id);
};
// Handle Milk update form on PUT.
exports.Milk_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Milk update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.Milk_view_all_Page = async function (req, res) {
    try {
        theMilks = await Milk.find();
        res.render('Milk', { title: 'Milk Search Results', result: theMilks });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Milk.
exports.Milk_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Milk.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Milk update form on PUT.
exports.Milk_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Milk.findById(req.params.id)
        // Do updates of properties
        if (req.body.name)
            toUpdate.name = req.body.name;
        if (req.body.price) toUpdate.price = req.body.price;
        if (req.body.type) toUpdate.type = req.body.type;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// Handle Milk delete on DELETE.
exports.Milk_delete = async function(req, res) {
    console.log("Delete view for id " + req.params.id)
    try{
       
            result = await MilkScheme.findByIdAndDelete(req.params.id)
            console.log("Removed" + result)
            res.send(result)

    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle a show one view with id specified by query
exports.Milk_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Milk.findById( req.query.id)
    res.render('Milkdetail',
    { title: 'Milk Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for creating a Milk.
    // No body, no in path parameter, no query.
    // Does not need to be async
    exports.Milk_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Milkcreate', { title: 'Milk Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a Milk.
// query provides the id
exports.Milk_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await Milk.findById(req.query.id)
res.render('Milkupdate', { title: 'Milk Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle a delete one view with id from query
exports.Milk_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Milk.findById(req.query.id)
    res.render('Milkdelete', { title: 'Milk Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };