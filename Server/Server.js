import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import connectdb from "./db/database.js"; // Import MongoDB connection logic
import blogRoute from "./routes/blogsroute.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";

// Load environment variables from .env file
import dotenv from "dotenv";
import UserRoute from "./routes/user.routes.js";
import { errorHandler } from "./middleware/globalErrorHandler.js";
import imgRouter from "./routes/ImageRoute.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import router from "./routes/blog/blogRoutes.js";
dotenv.config();

// Initialize Express app
const app = express();
app.use(morgan("dev"));

app.use(cookieParser());

// Middleware setup
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);
app.use(bodyParser.json());

// Establish MongoDB connection
connectdb();

// Routes
app.use("/api/blogs", router)
app.use("/api", blogRoute);
app.use("/api/sec",UserRoute);
app.use("/api/crousal" , imgRouter);
app.use("/api/pdf", uploadRoutes);


// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
