const dbConfig = require("../config/db.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;// automatiquement des promesses sur mongoose ou creation des requetes asynchrone

const db = {
    mongoose:mongoose,//stockerr la bibliotheque mongoose dans la cle mongoose
    url:dbConfig.url,
    product:require('./product_model.js')(mongoose),
    // users:require('./users_model.js')(mongoose)
};
// db.mongoose = mongoose;//
// db.url = dbConfig.url;
// db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;