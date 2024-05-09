const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
require("dotenv").config();

// MongoDB Atlas connection URI
const url = process.env.MONGODB_URL;

// Connect to MongoDB Atlas using Mongoose
mongoose.connect(url);

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
