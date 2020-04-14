const express = require("express");
const router = express.Router();
const Author = require("../models/authors");

// All Authors Route

router.get("/", (req, res) => {
  res.render("authors/index");
});

// New Authors routes
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});
//Create Authors
router.post("/", (req, res) => {
  res.send(req.body.name);
});

module.exports = router;
