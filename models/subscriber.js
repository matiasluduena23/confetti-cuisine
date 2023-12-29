const mongoose = require('mongoose');

const subscriberShema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true,
    },
    zipCode: {
        type: Number,
        min: [11111, 'Zip Code is too short'],
        max: [99999],
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
        },
    ],
});

if (!subscriberShema.options.toObject) subscriberShema.options.toObject = {};
subscriberShema.options.toObject.transform = function (doc, ret, options) {
    // remove the _id of every document before returning the result
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
};

module.exports = mongoose.model('Subscriber', subscriberShema);
