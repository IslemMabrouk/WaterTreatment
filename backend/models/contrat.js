const mongoose = require('mongoose');
const contratSchema = mongoose.Schema({
  type : String,
  nombreVisites : Number,
  analyseEau : String ,
  désinfectionAppareil : String,
  contrôleRéglage : String,
  sel : String,
  filtres  : String,
  dépannageMain : String,
  dépannagePrioritaire : String,
  piècesDétachées : String,




}) ;

const contrat =mongoose.model('Contrat' ,contratSchema);

module.exports = contrat ;