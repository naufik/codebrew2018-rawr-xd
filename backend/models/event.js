var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var event = new Schema({
    eventID: Number,
    name:  {type: String, required: true},
    tags: [String],
    orgName: String,
    type: String,
    statusAvailability: Boolean,
    contact:{
        website: String,
        contactNumber: String,
        email: String,
    },
    location: {
        longitude: Number,
        latitude: Number,
        city: String,
        country: String
    },
    date: {
        dateCreated: {type: Date, default: Date.now},
        applicationOpen: {type: Date, default: Date.now},
        applicationClose: Date,
        startDate: {type: Date, default: Date.now},
        endDate: Date,
    },
    desc: {
        longDesc: String,
        shortDesc: String,
    },

    commitment: {
        desc: String,
        unit: Number
    },
    duration: Number,
    signUp: String,
    participants: [Number], //userID
    requirements: [String]
});

var Event = mongoose.model('Event', event);
module.exports=Event;