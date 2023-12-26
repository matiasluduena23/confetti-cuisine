const mongoose = require('mongoose');
require('dotenv').config();

module.exports = mongoose.createConnection(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.j1ke0lv.mongodb.net/Confetti_db?retryWrites=true&w=majority`
);
