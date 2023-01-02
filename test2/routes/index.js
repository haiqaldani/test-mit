var express = require("express");
var router = express.Router();

var authHandler = require("../apis/auth");
var { verifySignUp } = require("../apis/middleware");

var noteRoute = require("./notes");

router.post("/login", authHandler.login);
router.post(
  "/signup",
  authHandler.signup, verifySignUp.checkDuplicateUsername
);

router.use("/note", noteRoute);

module.exports = router;
