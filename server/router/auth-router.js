const express = require("express");
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware')
const { home, register, login, user } = require("../controllers/auth-controller");
const validate = require("../middleware/validate-middleware");
const signupSchema = require("../validator/auth-validator");

router.route("/").get(home)

router.route("/register").post(validate(signupSchema), register)

router.route("/login").post(login)
router.route("/user").post(authMiddleware, user)

module.exports = router;