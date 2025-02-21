import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 4001;
const URI = "mongodb://127.0.0.1:27017/bookStore";

// Middleware
 // Enable CORS for frontend requests
app.use(express.json());
app.use(cors()) // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ Connected to MongoDB");
}).catch((error) => {
  console.error("❌ MongoDB Connection Error:", error);
});app.use("/book", bookRoute);
    app.use("/user", userRoute);  // Add user route to app

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
