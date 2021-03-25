const mongoose = require("mongoose")
const Schema = mongoose.Schema

const interiorSchema = new Schema({
    customer: {
        type: String,
        required: true
    },
    smallJob: {
        type: String,
    },
    mediumJob: {
        type: String,
    },
    bigJob: { 
        type: String,
    }

})
module.exports = mongoose.model("Interior", interiorSchema)