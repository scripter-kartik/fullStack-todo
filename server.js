import express from "express";
import User from "./models/User.js";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import cors from "cors";
const app = express();
const Port = 4000;
config();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Ohh No Error Again Work With Attention", err));

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashPassword });
    await user.save();
    if (!name || !email || !password)
      return res.status(401).json({ message: "fill all details" });
    res.status(200).json({ message: "user created", user });
  } catch (err) {
    res.status(400).json({ message: "error", err });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ success: false, message: "Invalid Email" });
    const isMatch = await bcrypt.compare(password, user.password); 
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ success: true, message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error", err });
  }
});

app.listen(Port, () => console.log(`The server is running on port ${Port}`));
