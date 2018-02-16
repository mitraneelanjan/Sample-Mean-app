const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true

    },
    phone : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true
    }
});

const Contact = module.exports = mongoose.model('Contact', ContactSchema);
