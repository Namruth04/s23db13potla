var Costume = require('../models/MilkScheme');
// List of all Costumes
exports.Milk_list = async function(req, res) {
try{
theCostumes = await Costume.find();
res.send(theCostumes);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// for a specific Costume.
exports.Milk_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};

// Handle Costume create on POST.
exports.milk_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Costume();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    
    document.name = req.body.name;
    document.price = req.body.price;
    document.type = req.body.type;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


// Handle Costume delete form on DELETE.
exports.costume_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.costume_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.Milk_view_all_Page = async function(req, res) {
    try{
    theCostumes = await Costume.find();
    res.render('Milk', { title: 'Milk Search Results', result: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// for a specific Costume.
exports.Milk_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Costume.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

// Handle Costume update form on PUT.
exports.Milk_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Costume.findById( req.params.id)
// Do updates of properties
if(req.body.name)
toUpdate.name = req.body.name;
if(req.body.price) toUpdate.price = req.body.price;
if(req.body.type) toUpdate.type = req.body.type;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};