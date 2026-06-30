const User = require("../models/user");
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

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Signup successful",
      user,
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

    // Check user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    res.status(200).json({
      message: "Login successful",
      user,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const moviesignup= async (req,res)=>{
  console.log('Moviesignup API called');
  res.json({ message: 'Success' });
  //  try {
  //   const { username, email, password } = req.body;

  //   // Check existing user
  //   const existingUser = await User.findOne({ email });

  //   if (existingUser) {
  //     return res.status(400).json({
  //       message: "User already exists",
  //     });
  //   }

  //   // Encrypt password
  //   const hashedPassword = await bcrypt.hash(password, 10);

  //   // Create user
  //   const user = await User.create({
  //     username,
  //     email,
  //     password: hashedPassword,
  //   });

  //   res.status(201).json({
  //     message: "Signup successful",
  //     user,
  //   });

  // } catch (error) {
  //   res.status(500).json({
  //     message: error.message,
  //   });
  // }
}
module.exports = {
  getData,
  signup,
  login,
  moviesignup
};