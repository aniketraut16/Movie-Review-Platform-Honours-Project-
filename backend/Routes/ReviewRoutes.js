const express = require("express");
const router = express.Router();
const {
  fetchAllReviews,
  fetchOneReview,
  fetchAllReviewsOfUser,
} = require("../Controllers/FetchingControllers");
const { userAuth } = require("../Middlewares/userauthentication");
const { adminAuth } = require("../Middlewares/adminauthentication");

const { addReview } = require("../Controllers/AddControllers");

const { deleteReview } = require("../Controllers/DeleteControllers");

router.get("/getAllReviews", fetchAllReviews);
router.get("/user/getAllReviews", userAuth, fetchAllReviewsOfUser);
router.get("/getOneReviews/:id", fetchOneReview);
router.post("/addReview", userAuth, addReview);
router.delete("/deleteReview/:id", adminAuth, deleteReview);

module.exports = router;
