const jwt = require("jsonwebtoken");
require("dotenv").config();
const key = process.env.SECRET_KEY;

module.exports = function (req, res, next) {
  //take out header
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "Token is invalid" });
  }
  try {
    const decoded = jwt.verify(token, key);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
};
