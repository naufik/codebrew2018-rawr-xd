
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    userID: Number,
    name:  {type: String, required: true},
    picture: String,
    dob: Date,
    contact: {
        contactNumber: String,
        email: String,
        website: String,
        emergencyContact: {
            name: String,
            contactNumber: String,
        },
    },
    friends: [Number], //userID
    organizations: [Number], //orgID
    pastEvents: [Number], //eventID
    currentEvents: [Number], //eventID
    pointSystem:{
        rank: String,
        points: Number,
    }
});


var User = mongoose.model('User', user);
module.exports=User;
=======
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    userID: Number,
    name:  {type: String, required: true},
    picture: String,
    dob: Date,
    contact: {
        contactNumber: String,
        email: String,
        website: String
        emergencyContact: {
            name: String,
            contactNumber: String,
        },
    },
    friends: [Number], //userID
    organizations: [Number], //orgID
    pastEvents: [Number], //eventID
    currentEvents: [Number], //eventID
    pointSystem:{
        rank: String,
        points: Number,
        levelThreshold: Number
    }
});


var User = mongoose.model('User', user);
module.exports=User;
>>>>>>> origin/HTML
