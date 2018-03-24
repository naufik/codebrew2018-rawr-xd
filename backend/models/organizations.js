var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var organizations new Schema({
    name:  {type: String, required: true},
    desc: String
});