const express = require("express");
const app = express();
const morgan = require("morgan");
const layout = require("./views/layout");
const models = require("./models");

models.db.authenticate().then(() => {
  console.log("connected to the database :)");
});

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(layout(""));
});

const init = async() =>{
  await models.Page.sync();
  await models.User.sync();

  app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
  })
}

init();
