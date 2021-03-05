const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Volunteer = require("../models/Volunteer");
require("dotenv").config();
const key = process.env.SECRET_KEY;
const bcrypt = require("bcrypt");

// Routes :  POST "/auth/login"
// Desc   :  Login and return JWT token
// access :  Public
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const volunteer = await Volunteer.findOne({ email });
    if (!volunteer) {
      return res.json({ msg: "Not Found" });
    }

    const ismatch = await bcrypt.compare(password, volunteer.password);
    if (!ismatch) {
      res.json({ msg: "Incorrect email or password" });
    }

    const payload = {
      user: {
        id: volunteer.id,
        name: volunteer.name,
      },
    };

    jwt.sign(payload, key, { expiresIn: 72000 }, (err, token) => {
      if (err) {
        console.log(err.message);
      }
      return res.json({ token });
    });
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
