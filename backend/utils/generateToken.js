const jwt = require("jsonwebtoken");
const generateToken = (userData) => {
  const token = jwt.sign({ userData }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token
};
module.exports = generateToken;