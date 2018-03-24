var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var task = new Schema({
    taskID: Number,
    name:  {type: String, required: true},
    tags: [String],
    orgName: String,
    statusAvailability: Boolean,
    desc: String,
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
        startDate: {type: Date, default: Date.now},
        endDate: Date,
    },
    requirements: [String]
});

var Task = mongoose.model('Task', task);
module.exports=Task;