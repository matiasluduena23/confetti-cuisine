const Subscriber = require("../models/subscriber");
require("../connection");

// exports.getSubscribers = (req, res, next) => {
//   Subscriber.find({})
//     .then((data) => {
//       res.render("suscriber", { arrSubscriber: data });
//     })
//     .catch((error) => {
//       next(error);
//     });
// };

exports.getSubscribers = (req, res, next) => {
  Subscriber.findOne()
    .populate("courses")
    .then((subscriber) => {
      console.log(subscriber);
      res.json(subscriber);
    })
    .catch((error) => {
      res.send("error get" + error);
    });
};

exports.getOneSuscriber = (req, res, next) => {
  const id = req.params.id;
  console.log(id);

  Subscriber.find({ _id: id })
    .exec()
    .then((data) => {
      data
        ? res.render("suscriber", { arrSubscriber: data })
        : res.render("error");
    })
    .catch((error) => {
      next(error);
    });
};

exports.postSuscriber = (req, res, next) => {
  const newSuscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode,
  });

  newSuscriber
    .save()
    .then((susb) => {
      res.render("thanks");
    })
    .catch((error) => {
      next(error);
    });
};

exports.putSuscriber = (req, res, next) => {
  const allCourse = getCoursesfromSuscriber(req.params.id);
  console.log(req.params.id);

  const suscriber = {
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode,
    courses: allCourse ? [req.body.courses, allCourse] : req.body.courses,
  };

  Subscriber.findOneAndUpdate({ _id: req.params.id }, suscriber, { new: true })
    .then((susb) => {
      if (susb) {
        res.send(susb);
      } else {
        res.render("error");
      }
    })
    .catch((error) => {
      next(error);
    });
};

exports.deleteSuscriber = (req, res, next) => {
  Subscriber.findByIdAndDelete(req.params.id)
    .then((susb) => {
      if (susb) {
        console.log("suscriber delete:" + susb);
        res.send(susb);
      } else {
        console.log("suscriber delete error finding:" + susb);
        res.render("error");
      }
    })
    .catch((error) => {
      next(error);
    });
};

const getCoursesfromSuscriber = (id) => {
  Subscriber.findById(id)
    .then((data) => {
      return data ? data.courses : [];
    })
    .catch((error) => {
      return [];
    });
};
