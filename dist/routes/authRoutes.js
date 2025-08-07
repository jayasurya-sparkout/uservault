"use strict";

var _express = _interopRequireDefault(require("express"));
var _authController = require("../controllers/authController");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.post("/register", _authController.registerUser);
router.post("/login", _authController.loginUser);
module.exports = router;