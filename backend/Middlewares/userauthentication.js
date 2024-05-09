const jwt = require("jsonwebtoken");
const { User } = require("../Models/User");

const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ username: decoded.username });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.username = decoded.username;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { userAuth };
