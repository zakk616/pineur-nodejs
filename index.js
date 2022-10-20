//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/index", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/services", function (req, res) {
  res.render("services");
});

app.get("/blogs", function (req, res) {
  res.render("blogs");
});

app.get("/blog", function (req, res) {
  res.render("blog");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

// app.listen(process.env.PORT, run(process.env.PORT));
