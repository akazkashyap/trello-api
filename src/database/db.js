const mongoose = require("mongoose")
const URL = "<Your MongoDb connection URL>"

mongoose.connect(URL)
    .then((res) => {
        console.log("Connected to database successfully")
    })
    .catch(err => { console.log(err) })

module.exports = mongoose;