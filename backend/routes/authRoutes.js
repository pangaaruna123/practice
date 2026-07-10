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
router.post("/signup", signup);
router.post("/login", login);
router.get("/movieusers", movieusers);
router.post("/moviesignup", moviesignup);

module.exports = router;