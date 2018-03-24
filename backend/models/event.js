var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var event = new Schema({
    eventID: Number,
    name:  {type: String, required: true},
    orgName: String,
    type: String,
    statusAvailability: Boolean,
    tags: [String],
    location: {
        longitude: Number,
        latitude: Number,
        name: String
    },
    date: {
        dateCreated: {type: Date, default: Date.now},
        applicationOpen: {type: Date, default: Date.now},
        applicationClose: Date
    },
    contact:{
        website: String,
        contactNumber: String,
        email: String,
    },
    desc: String,
    commitment: String,
    avgCommitment: Number,
    duration: Number,
    tasks: [Number], //taskID
    participants: {
        max: Number, //userID
        number: Number,
        members: [Number]
    },
    url: [String],
});

var Event = mongoose.model('Event', event);
module.exports=Event;
