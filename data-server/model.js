const mongoose = require("mongoose");

const RecordsModel = mongoose.model("records",//model or collection name
    mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        time: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        mood: {
            type: String,
            required: true
        }

    })
);

module.exports = RecordsModel;