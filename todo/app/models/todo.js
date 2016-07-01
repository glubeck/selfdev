var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// define model =================
var TodoSchema = new Schema({
    text : String
});

module.exports = mongoose.model('Todo', TodoSchema);