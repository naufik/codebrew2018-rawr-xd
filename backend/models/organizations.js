var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var organizations Schema({
    orgID: Number,
    name:  {type: String, required: true},
    desc: String,
    orgURL: String,
    members: [Number], //userID
    orgLocation: String, //address
    pastEvents: [Number], //eventID
});