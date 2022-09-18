const express = require("express");
const router = express.Router();
const {createUser, loginUser, getUserInfo} = require("../controllers/userControllers.js");
const {protect} = require("../middleware/authMiddleware");
router.post("/",createUser);
router.post("/login",loginUser);
router.get("/user",protect,getUserInfo);

module.exports = router;