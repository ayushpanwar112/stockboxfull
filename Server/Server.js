import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import connectdb from "./db/database.js"; // Import MongoDB connection logic
import blogRoute from "./routes/blogsroute.js";
import cookieParser from "cookie-parser";
import morgan from "morgan"


// Load environment variables from .env file
import dotenv from "dotenv";
import UserRoute from "./routes/user.routes.js";
import { errorHandler } from "./middleware/globalErrorHandler.js";
dotenv.config();

// Initialize Express app
const app = express();
app.use(morgan('dev'));
app.use('/uploads', express.static(path.resolve('uploads')));
app.use(cookieParser())
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Establish MongoDB connection
connectdb();
app.use(errorHandler)
// Route to fetch blogs from Blogger API and store them in MongoDB
app.use("/api", blogRoute);
app.use("/api/sec",UserRoute);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
