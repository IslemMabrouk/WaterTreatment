const mongoose = require('mongoose');
const mesureSchema = mongoose.Schema({
    region : String,
    date :Date,
    chlore : String,
    calcaire : String,
    residu : String,
    role :String,
    idClient:String


});

const mesure = mongoose.model('Mesure', mesureSchema );

module.exports = mesure;