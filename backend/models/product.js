const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    type: String,
    price: String,
    volume: String,
    pression:String,
    economie: String,
    conception :String,
    list: String,
    description: String,
    role: String,
    img : String
    

});

const product = mongoose.model('Product', productSchema);

module.exports = product;
