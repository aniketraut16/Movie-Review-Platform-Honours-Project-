const jwt = require("jsonwebtoken");
const { Admin } = require("../Models/Admin");

const adminAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findOne({ _id: decoded.adminId });

    if (!admin) {
      return res.status(401).json({ error: "Admin not found" });
    }

    req.username = admin.username;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { adminAuth };
