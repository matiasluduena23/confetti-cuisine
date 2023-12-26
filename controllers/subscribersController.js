const { default: mongoose } = require('mongoose');
const Subscriber = require('../models/subscriber');
require('../connection');

exports.getSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.find({}).exec();
        res.render('subscribers', { arrSubscriber: subscribers });
    } catch (error) {
        console.log(error);
    }
};

exports.postSuscriber = (req, res) => {
    const newSuscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode,
    });

    newSuscriber
        .save()
        .then((susb) => {
            console.log('suscriber create:' + susb);
            res.render('thanks');
            mongoose.connection.close();
        })
        .catch((err) => console.log('Error in post susb' + err));
};
