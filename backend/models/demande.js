const mongoose = require ('mongoose');
const demandeSchema = mongoose.Schema({
    idClient : String,
    client : String,
    email : String,
    idProduct : String,
<<<<<<< HEAD
    product:String,
=======
    product : String,
>>>>>>> e12f0561434f2bb7146f0e62cdb0bf5fbc46d071
    validation : String,
    etat : String
});

const demande = mongoose.model('Demande', demandeSchema );


module.exports = demande;