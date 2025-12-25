import express from "express";
import upload from "../middlewares/multer.js";
import {
  getProfile,
  loginuser,
  registerUser,
  updateProfile,
} from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";

const userRoute = express.Router();

userRoute.post("/register", registerUser);
userRoute.post("/login", loginuser);
userRoute.get("/get-profile", authUser, getProfile);
userRoute.get("update-profile", upload.single("image") , authUser, updateProfile);
export default userRoute;
