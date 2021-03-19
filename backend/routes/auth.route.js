const express = require("express");
const router = express.Router()

const {
  register,
  login,
  forgotPassword,
  passwordReset,
} = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgot-password").post(forgotPassword);
router.route("/password-reset").put(passwordReset);

module.exports = router;
