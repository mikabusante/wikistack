const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");
const { Page } = require ("../models");

router.get("/", async (req, res) => {
  res.send("router get wiki page");
});

router.post("/", async (req, res, next) => {
  // console.log(req.body.title, req.body.author);


  const makeSlug =(title)=>{
    return title.replace(/\s+/g, `_`).replace(/\W/g, '');
  }



  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status,
    slug: makeSlug(req.body.title)
  });
console.log(page);
  try{
    await page.save();
    res.redirect('/');
  }
  catch(error) {next(error)};


  // console.log(req.body);
});

router.get("/add", async (req, res) => {
  res.send(addPage());
});

module.exports = router;
