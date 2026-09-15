const express = require("express");
const { userData } = require("../controllers/controller");
const router = express.Router();


router.get('/users',userData);
router.get('/users/:id',(req,res)=>{
    res.send('using user id')
})
module.exports = router