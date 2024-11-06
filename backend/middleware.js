import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {User} from "./Schema.js";

dotenv.config();

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated.",
        success: false,
      });
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decode.userId).select("-password");
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};
