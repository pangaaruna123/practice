const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect to DB asynchronously without blocking server startup
// connectDB().catch((err) => {
//   console.warn("Database connection error:", err.message);
// });

app.use(cors());

// Middlewares
// const corsOptions = {
//   origin: [
//     "https://laughing-goldfish-v6p6qq6xj55xh6x6q-4200.app.github.dev",
//     "http://localhost:4200",
//   ],
//   credentials: true,
// };

// app.use(cors(corsOptions));

app.use(express.json());


// Routes
app.use("/api", require("./routes/authRoutes"));

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Backend server is running" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});