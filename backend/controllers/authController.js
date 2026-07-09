// const User = require("../models/user");
const bcrypt = require("bcryptjs");

let users = [
  { username: "john", email: "john@example.com", password: "password123" },
  { username: "jane", email: "jane@example.com", password: "password456" }
];
//getData
const getData = async (req, res) => {
  res.json(users);
};

// SIGNUP
const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    res.status(201).json({
      message: "Signup successful",
      user:  username // Replace with actual user object if needed
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginIdentifier = email || username;
    // Compare password
    const isMatch = await bcrypt.compare(password, '123456'); // Replace with user.password when using actual database

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    res.status(200).json({
      message: "Login successful",
      user: null, // Replace with actual user object if needed
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const moviesignup= async (req,res)=>{
  console.log('Moviesignup API called');
   try {
    const { username, email, password } = req.body;
    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

  
    res.status(201).json({
      message: "Signup successful",
      user: username, // Replace with actual user object if needed
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
module.exports = {
  getData,
  signup,
  login,
  moviesignup
};