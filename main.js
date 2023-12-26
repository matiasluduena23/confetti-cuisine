const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  homeController = require("./controllers/homeController"),
  subscribersController = require("./controllers/subscribersController"),
  errorController = require("./controllers/errorController");

require("dotenv").config();

app.set("port", process.env.PORT || 3000);

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

app.get("/suscriber", subscribersController.getSubscribers);
app.get("/suscriber/:id", subscribersController.getOneSuscriber);
app.post("/suscriber", subscribersController.postSuscriber);
app.put("/suscriber/:id", subscribersController.putSuscriber);
app.delete("/suscriber/:id", subscribersController.deleteSuscriber);

app.use(errorController.badRequest);
app.use(errorController.pageNotFoundError);

app.listen(app.get("port"), () => {
  console.log(`Server listen on port ${app.get("port")}`);
});
