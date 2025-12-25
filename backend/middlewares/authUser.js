import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "not authorized login agian",
      });
    }
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId=token_decoded.id
   
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
