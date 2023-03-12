const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    items: [{
        title: String,
        description: String
    }]
})

const Data = mongoose.model("Data", dataSchema)
module.exports = Data;
