const mongoose = require('mongoose');

const subscriberShema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    zipCode: {
        type: Number,
        require: true,
        min: [11111, 'The number is too short'],
    },
});

module.exports = mongoose.model('Subscriber', subscriberShema);
