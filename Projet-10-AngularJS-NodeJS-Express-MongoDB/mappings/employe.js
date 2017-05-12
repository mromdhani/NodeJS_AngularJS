var mongoose  = require('mongoose');
var Schema  = mongoose.Schema;

var employSchema  = new Schema({
     nom: String,
     poste : String,
     age : Number
   });

module.exports = mongoose.model('Employe', employSchema);