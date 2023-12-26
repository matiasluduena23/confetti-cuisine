const httpStatus = require("http-status-codes");

exports.pageNotFoundError = (req, res) => {
  let errorCode = httpStatus.NOT_FOUND;
  console.log(errorCode);
  res.status(errorCode);
  res.render("error");
};

exports.badRequest = (error, req, res, next) => {
  console.error(error);

  if (error.name === "CastError") {
    res.status(400).json({ message: "Bad id request" });
  } else {
    res.status(500).json({ message: "Bad request" });
  }
};
