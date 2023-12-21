const subscriber = require("../models/subscriber");
const Subscriber = require("../models/subscriber");

exports.getSubscribers = async (req, res, next) => {
  try {
    const subscribers = await Subscriber.find({}).exec();
    res.send(subscribers);
  } catch (error) {
    console.log(error);
  }
};
