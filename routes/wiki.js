const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");
const { Page } = require("../models");

router.get("/", async (req, res) => {
  res.send("router get wiki page");
});

router.post("/", async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status
  });

  try {
    await page.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/add", async (req, res) => {
  res.send(addPage());
});

router.get("/:slug", async (req, res, next) => {
  // SELECT page FROM pages WHERE slug = whateverTheSlugIs
  const foundPage = await Page.findAll({
    where: {
      slug: req.params.slug
    }
  });

  res.json(foundPage);
  // console.log("foundPage:", foundPage);
  // res.send(`hit dynamic route at ${req.params.slug}`);
});

module.exports = router;
