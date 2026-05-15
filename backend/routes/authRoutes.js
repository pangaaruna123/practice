const express = require("express");

const router = express.Router();

const {
  getData,
  signup,
  login,
} = require("../controllers/authController");
router.get("/users", getData);

router.post("/signup", signup);

router.post("/login", login);

module.exports = router;