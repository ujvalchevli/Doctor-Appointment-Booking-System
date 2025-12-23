import validator from "validator";
import bycrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    if (!imageFile) {
      return res.json({ success: false, message: "Image file is required" });
    }

    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email format" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    const imageupload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageupload.secure_url;

    const doctorData = {
      name,
      email,
      password: hashedPassword,
      image: imageUrl,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: new Date(),
      available: true,
    };

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();
    res.json({ success: true, message: "Doctor added successfully" });
  } catch (error) {
    console.error("Error adding doctor:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error. Please try again." });
  }
};

const loginadmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid admin credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error. Please try again." });
  }
};
const allDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password");
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error. Please try again." });
  }
};
export { addDoctor, loginadmin, allDoctors };
