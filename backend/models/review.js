const mongoose = require ('mongoose');
const reviewSchema = mongoose.Schema({
    avis : String,
    idClient : String,
    time : String,
    rate :String
});


const review = mongoose.model('Review', reviewSchema);

module.exports = review;