var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyparser = require("body-parser");
const cors = require("cors");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.json());
app.use(cors());

const mainRouter = require("./routes/index");

app.route("/").get((req, res) => {
  res.status(200).json({
    message: "Welcome to Weeding GuestBook API",
  });
});
app.use("/", mainRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;
