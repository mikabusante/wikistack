const express = require("express");
const app = express();
const morgan = require("morgan");
const layout = require("./views/layout");
const models = require("./models");
const wiki = require("./routes/wiki")
const user = require("./routes/user")

models.db.authenticate().then(() => {
  console.log("connected to the database :)");
});

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wiki)
app.use("/user", user)

app.get("/", (req, res) => {
  res.send(layout(""));
});

const init = async() =>{
  await models.db.sync({force:true});

  app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
  })
}

init();
