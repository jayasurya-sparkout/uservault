"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _db = _interopRequireDefault(require("./config/db"));
var _authRoutes = _interopRequireDefault(require("./routes/authRoutes"));
var _errorHandler = require("./middleware/errorHandler");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
_dotenv["default"].config();
var app = (0, _express["default"])();
(0, _db["default"])(); // Connect to MangoDB

app.use((0, _cors["default"])()); // Middleware
app.use(_express["default"].json()); // Middleware

app.use("/api/auth", _authRoutes["default"]); // Routes

app.use(_errorHandler.errorHandler); // Error Handler

var portNum = process.env.PORT;
app.listen(portNum, function () {
  // Server Listen
  console.log("Server Running on portNum ".concat(portNum));
});
