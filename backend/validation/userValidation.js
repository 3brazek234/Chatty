const Joi = require("joi");

const registerSchema = Joi.object({
  fullName: Joi.string().alphanum().min(3).max(30).required(),

  username: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),

  email: Joi.string()
    .email() 
    .required(),
});

// Schema للـ Login
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const updateProfileSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30),
  email: Joi.string().email(),
  password: Joi.forbidden(),
}).min(1);

module.exports = {
  registerSchema,
  loginSchema,
  updateProfileSchema,
};
