const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./config/db.js");

dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is Running!");
});

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
