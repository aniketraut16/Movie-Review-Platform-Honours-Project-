const express = require("express");
const router = express.Router();
const {
  fetchAllReviews,
  fetchOneReview,
  fetchAllReviewsOfUser,
} = require("../Controllers/FetchingControllers");
const { userAuth } = require("../Middlewares/userauthentication");

const { addReview } = require("../Controllers/AddControllers");

router.get("/getAllReviews", fetchAllReviews);
router.get("/user/getAllReviews", userAuth, fetchAllReviewsOfUser);
router.get("/getOneReviews/:id", fetchOneReview);
router.post("/addReview", userAuth, addReview);

module.exports = router;
