var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// define model =================
var CharacterSchema = new Schema({
    name : String,
    level : Number,
    race : String,
    alignment : String,
    strength : Number,
    dexterity : Number,
    constitution : Number,
    intelligence : Number,
    wisdom : Number,
    charisma : Number
});

module.exports = mongoose.model('Character', CharacterSchema);