"use strict";

var errorHandler = function errorHandler(err, req, res, next) {
  console.error(err.stack);
  var statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).json({
    message: err.message || "Something went wrong",
    stack: process.env.NODE_ENV === "production" ? null : err.stack
  });
};
module.exports = {
  errorHandler: errorHandler
};