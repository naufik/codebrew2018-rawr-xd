var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var event = new Schema({
    name:  {type: String, required: true},
    startDate: {type: Date, default: Date.now} ,
    endDate: Date,
    desc: String,
    location: [Number],
    commitment: {
        desc: String,
        unit: Number
    },
    duration: Number,
    signUp: String
});