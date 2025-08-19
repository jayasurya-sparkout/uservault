"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
var userSchema = new _mongoose["default"].Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = _mongoose["default"].model("user", userSchema);
