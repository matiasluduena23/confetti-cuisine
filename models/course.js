const { Schema, model } = require("mongoose");
require("../connection");

const courseSchema = new Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
    require: true,
  },
  items: [],
  zipCode: {
    type: Number,
    min: [11111, "Zip Code is too short"],
    max: [99999],
  },
});

module.exports = model("Course", courseSchema);
