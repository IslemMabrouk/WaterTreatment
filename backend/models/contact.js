const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({

    idClient: String,
    type: String,
    date: String


});

const contact = mongoose.model('Contact', contactSchema);

module.exports = contact;