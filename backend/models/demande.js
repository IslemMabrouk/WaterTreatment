const mongoose = require ('mongoose');
const demandeSchema = mongoose.Schema5({
    idClient : String,
    idProduct : String,
    demande : String,
    etat : String
});

const demande = mongoose.model('Dmenade', demandeSchema);

module.exports = demande;