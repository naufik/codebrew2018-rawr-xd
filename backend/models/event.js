var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var event = new Schema({
    eventID: Number,
    name:  {type: String, required: true},
    orgName: String,
    tags: [String],
    type: String,
    Availability: Boolean,
    contact:{
        website: String,
        contactNumber: String,
        email: String,
    },
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
    desc: String,
    commitment: String,
    avgCommitment: Number,
    duration: Number,
    tasks: [Number], //taskID
    participants: {
        max: Number, //userID
        number: Number,
        membersID: [Number]
    }
    important: [String]
    url: [String],
});

var Event = mongoose.model('Event', event);
module.exports=Event;
