const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController");

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

app.listen(app.get("port"), () => {
  console.log(`Server listen on port ${app.get("port")}`);
});

app.use(errorController.pageNotFoundError);
app.use(errorController.InternalServerError);
