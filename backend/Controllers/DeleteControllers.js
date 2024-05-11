const { Review } = require("../Models/Review");
const { User } = require("../Models/User");

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find all reviews uploaded by the user
    const userReviews = await Review.find({ uploader: userId });

    // Delete all reviews uploaded by the user
    await Review.deleteMany({ uploader: userId });

    // Delete the user from the database
    await User.findByIdAndDelete(userId);

    return res
      .status(200)
      .json({ message: "User and associated reviews deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;

    // Check if the review exists
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    // Find the user who uploaded the review
    const user = await User.findById(review.uploader);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Remove the review ID from the user's uploadedReviews array
    user.uploadedReviews = user.uploadedReviews.filter(
      (id) => id.toString() !== reviewId
    );
    await user.save();

    // Delete the review from the database
    await Review.findByIdAndDelete(reviewId);

    return res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { deleteUser, deleteReview };
