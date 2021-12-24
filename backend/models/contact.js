const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({

    idClient: String,
    client: String,
    type: String,
    date: String,
    etat: String


});

const contact = mongoose.model('Contact', contactSchema);

module.exports = contact;