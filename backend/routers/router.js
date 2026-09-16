const express = require("express");
const { userData, createUser} = require("../controllers/controller");
const router = express.Router();


router.get('/users',userData);
router.post('/user',createUser)
module.exports = router