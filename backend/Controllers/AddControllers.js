const { User } = require("../Models/User");
const { Review } = require("../Models/Review");
const { Admin } = require("../Models/Admin");
const addReview = async (req, res) => {
  try {
    // Get the user ID from the authentication middleware
    const username = req.username;
    const existingUser = await User.findOne({ username });
    console.log(existingUser);

    // Extract post data from request body
    const { title, content } = req.body;

    // Create a new post document
    const newReview = new Review({
      uploader: existingUser._id,
      title,
      content,
    });

    // Save the new post to the database
    await newReview.save();

    // Update the user's uploadedPosts array with the new post's ID
    await User.findOneAndUpdate(
      { username },
      {
        $push: { uploadedReviews: newReview._id },
      }
    );

    // Send a success response
    return res.status(201).json({ message: "Review added successfully." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error." });
  }
};

const createAdmin = async (username, password) => {
  try {
    // Check if an admin with the given username already exists
    const existingAdmin = await Admin.findOne({ username });

    if (existingAdmin) {
      throw new Error("Admin already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the admin user
    const admin = new Admin({
      username,
      password: hashedPassword,
    });

    // Save the admin user to the database
    await admin.save();

    console.log("Admin created successfully");
  } catch (error) {
    console.error("Error creating admin:", error.message);
  }
};

module.exports = { addReview, createAdmin };
