const mongoose = require("mongoose");

const subscriberShema = mongoose.Schema({
  name: String,
  email: String,
  zipCode: Number,
});

module.exports = mongoose.model("Subscriber", subscriberShema);
