const mongoose = require('mongoose');
const contratSchema = mongoose.Schema({
  type : String,
  nombreVisites : Number,
  depannagePrioritaire : String,
  services: String,





}) ;

const contrat =mongoose.model('Contrat' ,contratSchema);

module.exports = contrat ;