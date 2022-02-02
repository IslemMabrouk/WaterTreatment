const mongoose = require('mongoose');
const mesureSchema = mongoose.Schema({
    region : String,
    annee : String,
    date :Date,
    chlore : String,
    calcaire : String,
    residu : String,
    role :String,
    idClient:String,
    client:String


});

const mesure = mongoose.model('Mesure', mesureSchema );

module.exports = mesure;