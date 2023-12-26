const mongoose = require("mongoose");
require("dotenv").config();

module.exports = mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.j1ke0lv.mongodb.net/Confetti_db?retryWrites=true&w=majority`
  )
  .then(() => console.log("Successfully connected to mongo!"))
  .catch((error) => console.log(`Error connecting to Database ${error}`));
