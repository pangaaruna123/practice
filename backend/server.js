const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect to DB asynchronously without blocking server startup
connectDB().catch((err) => {
  console.warn("Database connection error:", err.message);
});


// Middlewares
app.use(cors());

app.use(express.json());


// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Backend server is running" });
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});