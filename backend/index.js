const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const { createAdmin } = require("./Controllers/AddControllers"); // Import the createAdmin function

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
require("dotenv").config();

const AdminRoutes = require("./Routes/AdminRoutes");
const UserRoutes = require("./Routes/UserRoutes");
const ReviewRoutes = require("./Routes/ReviewRoutes");

const url = process.env.MONGODB_URL;

mongoose.connect(url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", async () => {
  console.log("Connected to MongoDB Atlas");

  await createAdmin("admin", "admin#123");

  app.use(AdminRoutes);
  app.use(UserRoutes);
  app.use(ReviewRoutes);

  app.listen(8080, () => {
    console.log("Listening on port 5000");
  });
});
