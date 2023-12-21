const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  homeController = require("./controllers/homeController"),
  subscribersController = require("./controllers/subscribersController"),
  errorController = require("./controllers/errorController"),
  Subscriber = require("./models/subscriber");
require("dotenv").config();

app.set("port", process.env.PORT || 3000);

//datbase connection
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.j1ke0lv.mongodb.net/Confetti_db?retryWrites=true&w=majority`
);
const db = mongoose.connection;
db.once("open", () => {
  console.log("Successfully connected to mongo!");
});

//insert data

// body parsing
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showContact);
app.post("/contact", homeController.postSignUpForm);

app.get("/subscribers", subscribersController.getSubscribers);

app.listen(app.get("port"), () => {
  console.log(`Server listen on port ${app.get("port")}`);
});

app.use(errorController.pageNotFoundError);
app.use(errorController.InternalServerError);
