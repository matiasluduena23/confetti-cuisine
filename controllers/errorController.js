const httpStatus = require("http-status-codes");

exports.pageNotFoundError = (req, res) => {
  let errorCode = httpStatus.NOT_FOUND;
  console.log(errorCode);
  res.status(errorCode);
  res.render("error");
};

exports.InternalServerError = (req, res) => {
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(errorCode);
  res.status(errorCode);
  res.render("error");
};
