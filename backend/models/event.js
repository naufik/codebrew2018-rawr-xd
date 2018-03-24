var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var event = new Schema({
    eventID: Number,
    name:  {type: String, required: true},
    orgName: String,
    startDate: {type: Date, default: Date.now} ,
    endDate: Date,
    desc: String,
    shortDesc: String,
    location: [Number], //longitude, latitude
    commitment: {
        desc: String,
        unit: Number
    },
    duration: Number,
    signUp: String,
    participants: [Number] //userID
});

var Event = mongoose.model('Event', event);
module.exports=Event;