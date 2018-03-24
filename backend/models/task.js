var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var task = new Schema({
    taskID: Number,
    name:  {type: String, required: true},
    orgName: String,
    type: String,
    statusAvailability: Boolean,
    tags: [String],
    location: {
        longitude: Number,
        latitude: Number,
        name: String,
    },
    date: {
        dateCreated: {type: Date, default: Date.now},
        startDate: {type: Date, default: Date.now},
        endDate: Date,
    },
    contact:{
        website: String,
        contactNumber: String,
        email: String,
    },
    desc: String,
    important: string,
    requirements: [String],
    url: [String]
});

var Task = mongoose.model('Task', task);
module.exports=Task;
