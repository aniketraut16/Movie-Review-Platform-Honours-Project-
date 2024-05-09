const express = require("express");
const router = express.Router();
const { userLogin, userSignIn } = require("../Controller/AuthControllers");
const {
  fetchAllUsers,
  userdata,
} = require("../Controller/FetchingControllers");
const { userAuth } = require("../Middlewares/userauthentication");

const { adminAuth } = require("../Middlewares/adminauthentication");

router.post("/user/signin", userSignIn);
router.post("/user/login", userLogin);

router.get("/getAllUsers", adminAuth, fetchAllUsers);

router.get("/fetchuser", userAuth, userdata);

module.exports = router;
