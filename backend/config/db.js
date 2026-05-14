const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.warn("MongoDB connection failed:", error.message);
    console.warn("Server will run without database - auth features may not work");
    // Don't exit, allow server to continue running
  }
};

module.exports = connectDB;