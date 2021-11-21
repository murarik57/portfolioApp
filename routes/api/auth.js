const express = require("express");
const router = express.Router();

//@route GET api/auth
//@descp Test route
//@access Public
router.get("/", (req, res) => {
  res.send("auth Routes");
});

module.exports = router;
