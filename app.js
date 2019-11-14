const express = require("express");
const app = express();
const morgan = require("morgan");
const layout = require("./views/layout");
const { db } = require("./models");

db.authenticate().then(() => {
  console.log("connected to the database :)");
});

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(layout(""));
});

app.listen("3000");
