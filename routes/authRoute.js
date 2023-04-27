const express = require("express");
const userController = require("../controllers/userCtrl");
const { verifyToken } = require("../middleware/authMiddleware");
const router = express.Router()

// router.route("/user/me").get(userController.getUser)
// router.route("/user/me" ).get(verifyToken,userController.getMe)
router.route("/signup").post(userController.createUser)
router.route("/login").post(userController.loginUser)

module.exports = router