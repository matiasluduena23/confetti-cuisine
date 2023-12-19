exports.showCourses = (req, res) => {
  res.render("courses", {
    offeredCourses: courses,
  });
};

exports.showContact = (req, res) => {
  res.render("contact");
};

exports.postSignUpForm = (req, res) => {
  res.render("thanks");
};

var courses = [
  {
    title: "Event Driven Cakes",
    cost: 50,
  },
  {
    title: "Asynchronous Artichoke",
    cost: 25,
  },
  {
    title: "Object Oriented Orange Juice",
    cost: 10,
  },
];
