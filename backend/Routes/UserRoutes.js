const express = require("express");
const router = express.Router();
const { userLogin, userSignIn } = require("../Controllers/AuthControllers");
const {
  fetchAllUsers,
  userdata,
} = require("../Controllers/FetchingControllers");
const { deleteUser } = require("../Controllers/DeleteControllers");
const { userAuth } = require("../Middlewares/userauthentication");

const { adminAuth } = require("../Middlewares/adminauthentication");

router.post("/user/signin", userSignIn);
router.post("/user/login", userLogin);

router.get("/getAllUsers", adminAuth, fetchAllUsers);

router.get("/fetchuser", userAuth, userdata);
router.delete("/deleteUser/:id", adminAuth, deleteUser);

module.exports = router;
