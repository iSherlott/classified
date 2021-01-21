const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const home = require("./routes/home");

app.engine(
  "handlebars",
  handlebars({
    defaultView: "main",
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", home);

module.exports = app;
