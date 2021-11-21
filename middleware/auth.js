const jwt = require("jsonwebtoken");
const config = require("config");
const jwtSecret = config.get("jwtSecret");

module.exports = (req, res, next) => {
  //Get token from header
  const token = req.header("x-auth-token");

  //check if token is present
  if (!token) {
    return res.status(401).json({ msg: "No Token! Authorization Denied" });
  }

  //verify token
  try {
    const decoded = jwt.verify(token, jwtSecret);

    req.user = decoded.user;
    next();
  } catch (err) {
    return res.json({ msg: "Invalid Token!" });
  }
};
