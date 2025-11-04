// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const enquiryRoutes = require("./routes/enquiryRoutes");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // ✅ Needed to parse JSON body
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/enquiries", enquiryRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("✅ Enquiry API is running");
});

// Error handler (always at the end)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
