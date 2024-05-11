const express = require("express");
const router = express.Router();
const { adminLogin } = require("../Controllers/AuthControllers");

router.post("/admin/login", adminLogin);

module.exports = router;
