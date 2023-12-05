const mongoose = require("mongoose");

const PollSchema = new mongoose.Schema({
    question : {
        type: String,
        required: true,
    },
    option1 : {
        type: String,
        required: true
    },
    option2 : {
        type: String,
        required: true
    },
    option3 : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    }

});

const Poll = mongoose.model("Poll", PollSchema);

module.exports = Poll;