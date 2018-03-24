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
<<<<<<< HEAD
        website: String,
=======
        website: String
>>>>>>> abd47ead51d0f40bd34999f5c851b94217152946
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
<<<<<<< HEAD
=======
        levelThreshold: Number
>>>>>>> abd47ead51d0f40bd34999f5c851b94217152946
    }
});


var User = mongoose.model('User', user);
module.exports=User;
