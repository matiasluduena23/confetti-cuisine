const subscriber = require('../models/subscriber');
const Subscriber = require('../models/subscriber');

exports.getSubscribers = async (req, res, next) => {
    try {
        const subscribers = await Subscriber.find({}).exec();
        res.render('subscribers', { arrSubscriber: subscribers });
    } catch (error) {
        console.log(error);
    }
};
