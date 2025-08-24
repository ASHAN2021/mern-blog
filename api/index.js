import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import AdRoutes from "./routes/Ad.route.js";

import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

if (!process.env.MONGO) {
  console.error("MONGO environment variable is not defined");
  process.exit(1);
}

console.log("Attempting to connect to MongoDB...");
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    console.error("Please check:");
    console.error("1. Your internet connection");
    console.error("2. MongoDB Atlas cluster is running");
    console.error("3. Your IP address is whitelisted in MongoDB Atlas");
    console.error("4. Username and password are correct");
    process.exit(1);
  });

const _dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/Ad", AdRoutes);

app.use(express.static(path.join(_dirname, "client", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  console.error("Error:", err); // Log the error details
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
