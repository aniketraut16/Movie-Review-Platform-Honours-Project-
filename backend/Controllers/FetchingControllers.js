const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Admin } = require("../models/AdminModel");
const { Review } = require("../models/ReviewModel");
const { User } = require("../models/UserModel");

const fetchAllReviews = async (req, res) => {
  try {
    const Reviews = await Review.find().populate("uploader", "username"); // Populate uploader field with username

    return res.status(200).json(Reviews);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error." });
  }
};
const fetchOneReview = async (req, res) => {
  // Res id
  try {
    const ReviewId = req.params.id; // Assuming the Review ID is passed in the request URL

    // Find the Review by ID
    const Review = await Review.findById(ReviewId).populate(
      "uploader",
      "username name"
    );

    if (!Review) {
      return res.status(404).json({ message: "Review not found." });
    }

    // If the Review is found, send it to the client
    return res.status(200).json({ Review });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error." });
  }
};
const fetchAllUsers = async (req, res) => {
  try {
    // Ensure the user accessing this endpoint is an admin
    const adminUsername = req.username;
    const admin = await Admin.findOne({ username: adminUsername });
    if (!admin) {
      return res
        .status(401)
        .json({ error: "Unauthorized access. Admin privileges required." });
    }

    // Fetch all users data
    const users = await User.find({}, { password: 0 }); // Excluding password from the response

    // Send the users data to the client
    return res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error." });
  }
};

const fetchAllReviewsOfUser = async (req, res) => {
  try {
    // Assuming req.username is set by your middleware
    const username = req.username;

    // Find the user based on the username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find all Reviews by the user
    const Reviews = await Review.find({ uploader: user._id });

    return res.status(200).json(Reviews);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const userdata = async (req, res) => {
  try {
    const username = req.username;

    // Find the user based on the username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  fetchAllReviews,
  fetchAllUsers,
  fetchOneReview,
  fetchAllReviewsOfUser,
  userdata,
};
