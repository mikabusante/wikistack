const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");

router.get("/", async (req, res) => {
  res.send("router get wiki page");
});

router.post("/", async (req, res) => {
  // console.log(req.body.title, req.body.author);
  console.log(req.body);
});

router.get("/add", async (req, res) => {
  res.send(addPage());
});

module.exports = router;
