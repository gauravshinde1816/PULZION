const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Volunteer = require("../models/Volunteer");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
require("dotenv").config();
const key = process.env.SECRET_KEY;
//test route
router.get("/test", auth, (req, res) => {
  res.send("Test Route Volunteer");
});

//Route :   GET  "/volunteers/"
//access:   public
//desc  :   get all volunteers to the database
router.get("/", async (req, res) => {
  try {
    const volunteers = await Volunteer.find({});
    if (volunteers.length == 0) {
      return res.status(400).json({ msg: "No Volunteer Found" });
    }

    return res.json({ volunteers });
  } catch (error) {
    return res.status(500).json({ msg: "Server Error" });
  }
});

//Route :  POST  "/volunteers/add"
//access:  public
//desc  :  Add new volunteer to the database
router.post("/add", async (req, res) => {
  try {
    const { name, email, education, skills, address, phone } = req.body;
    // hash password

    let password = await bcrypt.hash(req.body.password, 10);
    const volunteer = new Volunteer({
      name,
      email,
      password,
      education,
      skills,
      address,
      phone,
    });
    await volunteer.save();
    const payload = {
      user: {
        id: volunteer.id,
        name: volunteer.name,
      },
    };

    jwt.sign(payload, key, { expiresIn: 36000 }, (err, token) => {
      if (err) {
        console.log(err.message);
      }
      return res.json(token);
    });
    // return res.json({ msg: "Volunteer created" });
  } catch (error) {
    return res.status(500).json({ msg: "Server Error" });
  }
});

//Route :  PUT  "/volunteers/:id"
//access:  public
//desc  :  Update volunteer in the database
router.put("/:id", async (req, res) => {
  try {
    const { name, email, education, skills, address, phone } = req.body;
    const volunteer = await Volunteer.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        education,
        skills,
        address,
        phone,
      },
      { new: true }
    );
    if (!volunteer) {
      return res.json({ msg: "Volunteer Not found" });
    }
    return res.json({ volunteer });
  } catch (error) {
    return res.status(500).json({ msg: "Server Error" });
  }
});

//Route :  DELETE  "/volunteers/:id"
//access:  public
//desc  :  Delete volunteer in the database
router.delete("/:id", async (req, res) => {
  try {
    const volunteer = await Volunteer.findByIdAndDelete(req.params.id);
    if (!volunteer) {
      return res.json({ msg: "Volunteer not available" });
    }
    return res.json({ msg: "Volunteer deleted" });
  } catch (error) {
    return res.status(500).json({ msg: "Server Error" });
  }
});
module.exports = router;
