import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import configureCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
configureCloudinary();

app.use(express.json());
app.use(cors());

app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("Doctor Appointment Booking System Backend is running");
});

app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (err) => {
    console.error("Server error:", err);
  });
