var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    userID: Number,
    name:  {type: String, required: true},
    dob: Date,
    desc: String,
    friends: [Number], //userID
    organizations: [Number], //orgID
    pastEvents: [Number], //eventID
    pointSystem:{
        rank: String,
        currentXP: Number,
        levelThreshold: Number
    }
});


var User = mongoose.model('User', user);
module.exports=User;