const express = require("express");
const router = express.Router();
const {
  fetchAllReviews,
  fetchOneReview,
  fetchAllReviewsOfUser,
} = require("../Controller/FetchingControllers");
const { userAuth } = require("../Middlewares/userauthentication");

router.get("/getAllReviews", fetchAllReviews);
router.get("/user/getAllReviews", userAuth, fetchAllReviewsOfUser);
router.get("/getOneReviews/:id", fetchOneReview);
router.Review("/addReview", userAuth, addReview);

module.exports = router;
