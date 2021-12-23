const mongoose = require('mongoose');
const mesureSchema = mongoose.Schema({
    region : String,
    annee :String,
    chlore : String,
    calcaire : String,
    residu : String

});

const mesure = mongoose.model('Mesure', mesureSchema );

module.exports = mesure;