const mongoose = require ('mongoose');
const demandeSchema = mongoose.Schema({
    idClient : String,
    idProduct : String,
    validation : String,
    etat : String
});

const demande = mongoose.model('Demande', demandeSchema );


module.exports = demande;