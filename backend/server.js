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
app.use(cors({
  origin: "https://miniature-space-potato-jj9w45rg7w6cpp55-4200.app.github.dev",
  credentials: true
}));

app.use(express.json());


// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Backend server is running" });
});

// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});