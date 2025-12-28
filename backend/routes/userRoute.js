import express from "express";
import upload from "../middlewares/multer.js";
import {
  bookAppointment,
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
userRoute.post("/update-profile", upload.single("image") , authUser, updateProfile);
userRoute.post("/book-appointment", authUser, bookAppointment);
export default userRoute;

