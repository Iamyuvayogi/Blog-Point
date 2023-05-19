const express = require("express");
const router = express.Router();
const Post = require('../models/post');

//Routes
router.get("", (req, res) => {
  const locals = {
    title: "BlogPoint",
    description: "simple blog from node js, express and mongodb",
  };

  try {
    const data = await Post.find();
    res.render("index", { locals });
  } catch (error) {
    console.log(error);
  }

});

// function insertPostData() {
//   Post.insertMany([{
//     title: "Buliding a blog 1",
//     body: "This is a body text",
//   },
//   {
//     title: "Buliding a blog 2",
//     body: "This is a body text",
//   },
//   {
//     title: "Buliding a blog 3",
//     body: "This is a body text",
//   },
//   {
//     title: "Buliding a blog 4",
//     body: "This is a body text",
//   },
//   {
//     title: "Buliding a blog 5",
//     body: "This is a body text",
//   },])
// }
// insertPostData();


router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
