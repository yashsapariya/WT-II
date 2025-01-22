const mongoose = require("mongoose");

const schema = mongoose.Schema({
    faculty_name: String,
    faculty_phoneno: Number,
    faculty_city: String
})

module.exports = mongoose.model("faculty_details",schema)