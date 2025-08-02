const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized. No token." });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // attach user info
      next();
    } catch (err) {
      return res.status(403).json({ success: false, message: "Invalid or expired token." });
    }
  };
  
  export default verifyToken;