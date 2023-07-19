
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const healthSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    temperature: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email"
        ]
    },
    phonenumber: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
});

const health = mongoose.model('health', healthSchema);
module.exports = health;