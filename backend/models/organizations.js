var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var organizations = new Schema({
    orgID: Number,
    name:  {type: String, required: true},
    desc: String,
    contact:{
        website: String,
        contactNumber: String,
        email: String,
    },
    members: [Number], //userID
    orgLocation: String, //address
    pastEvents: [Number] //eventID
});

var Org = mongoose.model('Org', organizations);
module.exports=Org;