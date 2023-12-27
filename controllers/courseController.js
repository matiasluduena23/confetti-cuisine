require("../connection");
const Course = require("../models/course");

exports.getCourses = (req, res, next) => {
  Course.find({})
    .then((data) => {
      data ? res.render("courses", { courses: data }) : res.render("error");
    })
    .catch((error) => next(error));
};

exports.postCourse = (req, res, next) => {
  const newCourse = new Course({
    title: req.body.title,
    description: req.body.description,
    items: req.body.items.split(","),
    zipCode: req.body.zipCode,
  });

  newCourse
    .save()
    .then((data) => {
      data ? res.send(data) : res.json({ message: "course not found" });
    })
    .catch((error) => next(error));
};

exports.putCourse = (req, res, next) => {
  const id = req.params.id;

  const updateCourse = {
    title: req.body.title,
    description: req.body.description,
    items: req.body.items.split(","),
    zipCode: req.body.zipCode,
  };

  Course.findByIdAndUpdate(id, updateCourse, { new: true })
    .then((data) => {
      data ? res.send(data) : res.json({ message: "course not found" });
    })
    .catch((error) => next(error));
};

exports.deleteCourse = (req, res, next) => {
  const id = req.params.id;

  Course.findByIdAndDelete(id)
    .then((data) => {
      data
        ? res.send(`Course deleted: ${data}`)
        : res.json({ message: "course not found to delete" });
    })
    .catch((error) => next(error));
};
