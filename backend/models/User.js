const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  connectCode: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  fullName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 10,
  },
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 10,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
