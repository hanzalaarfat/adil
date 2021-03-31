var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
// var mongoose = require("mongoose");
// let dotenv = require("dotenv");
var cors = require("cors");
// require("dotenv").config();
// const multer = require("multer");
const port = process.env.PORT || 3000;
// let storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });
// let upload = multer({ storage: storage });
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;

// dotenv.config({ path: "./config.env" });

app.get("/", (req, res) => {
  res.render("home", { message: "Homepage" });
});
app.get("/am", (req, res) => {
  res.send("abc page");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App listining at port :  ${port} `);
});
