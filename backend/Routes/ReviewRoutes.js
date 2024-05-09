const express = require("express");
const router = express.Router();
const {
  fetchAllReviews,
  fetchOneReview,
  fetchAllReviewsOfUser,
} = require("../controller/FetchingControllers");
const { addReview } = require("../controller/AddControllers");
const { userAuth } = require("../middlewares/userauth");

router.get("/getAllReviews", fetchAllReviews);
router.get("/user/getAllReviews", userAuth, fetchAllReviewsOfUser);
router.get("/getOneReviews/:id", fetchOneReview);
router.Review("/addReview", userAuth, addReview);

module.exports = router;
