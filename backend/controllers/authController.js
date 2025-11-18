const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const generateUniqueConnectCode = require("../utils/generateUniqueConnectCode.js");
const generateToken = require("../utils/generateToken.js");
const register = async (req, res) => {
  try {
    const { email, password, fullName, username } = req.body;
    const existUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (existUser) {
      return res.json({
        success: false,
        message: "User is existing, try Login",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
      fullName,
      connectCode: await generateUniqueConnectCode(),
    });
    res.status(201).json({
      success: true,
      message: "User created successfully!",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findingUser = await User.findOne({
      email,
    });
    if (!findingUser) {
      return res.status(400).json({
        success: false,
        message: "User not found, try register",
      });
    }
    const isValidPassword = await bcrypt.compare(
      password,
      findingUser.password
    );
    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }
    const userDate = {
      email,
      password,
      fullName: findingUser.fullName,
      username: findingUser.username,
    };
    const token = generateToken(userDate);
    res.cookie;
    res.status(201).json({
      success: true,
      message: "Login successfully",
      token,
      data: userDate,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
module.exports = {
  register,
  login,
};
