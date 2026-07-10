const express = require("express");

const router = express.Router();

const {
  getData,
  signup,
  login,
  moviesignup,
  movieusers
} = require("../controllers/authController");
router.get("/users", getData);
router.get("/movieusers", movieusers);

router.post("/signup", signup);

router.post("/login", login);
router.post("/moviesignup", moviesignup);

module.exports = router;