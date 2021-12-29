const mongoose = require ('mongoose');
const demandeSchema = mongoose.Schema({
    idClient : String,
    client : String,
    email : String,
    idProduct : String,
    product:String,
    validation : String,
    etat : String
});

const demande = mongoose.model('Demande', demandeSchema );


module.exports = demande;