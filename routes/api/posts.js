const express = require("express");
const router = express.Router();

//@route GET api/posts
//@descp Test route
//@access Public
router.get("/", (req, res) => {
  res.send("posts Routes");
});

module.exports = router;
