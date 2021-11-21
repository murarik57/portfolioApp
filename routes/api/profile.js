const express = require("express");
const router = express.Router();

//@route GET api/profile
//@descp Test route
//@access Public
router.get("/", (req, res) => {
  res.send("profile Routes");
});

module.exports = router;
