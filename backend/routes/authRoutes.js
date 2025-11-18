const express = require("express");
const validate = require("../middleware/validate");
const { registerSchema, loginSchema } = require("../validation/userValidation");
const { register, login } = require("../controllers/authController");
const router = express.Router();
router.post("/register", validate(registerSchema, "body"), register);
router.post("/login", validate(loginSchema, "body"), login);
module.exports = router;
