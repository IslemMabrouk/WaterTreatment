const mongoose =require('mongoose');
const calculSchema = mongoose.Schema({
 
    calcaire : Number,
    chloreInitial : Number,
    chloreFinal: Number,
    residusSec : Number,
    calcaire : Number,
    nitrates : Number,
    plomb : Number,
    aluminium : Number,


    
    
    
    
    
    });
    
    const calcul = mongoose.model('Calcul', calculSchema);
    
    module.exports = calcul ;