const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected");
})
.catch((error)=>{
    console.log("MongoDB Error:", error);
});
app.use(cors());

app.use(express.json());
app.use("/api", require("./routes/authRoutes"));

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Backend server is running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});