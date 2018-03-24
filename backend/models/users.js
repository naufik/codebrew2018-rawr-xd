var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    userID: Number,
    name:  {type: String, required: true},
    dob: Date,
    desc: String,
    friends: [Number],
    organizations: [Number],
    pointSystem:{
        rank: String,
        currentXP: Number,
        levelThreshold: Number
    }
});


var User = mongoose.model('User', user);
module.exports=User;