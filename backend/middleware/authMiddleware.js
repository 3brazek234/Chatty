const authMiddleware = async (req, res, next) => {
  try {
    const { token } = req.header;
    if (!token) {
      res.status(401).json({
        success: false,
        message: "not authorized",
      });
    }
    next();
  } catch (err) {
    console.log(err);
  }
};
