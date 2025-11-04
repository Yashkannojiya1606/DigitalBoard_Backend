// controllers/enquiriesController.js
const Enquiry = require("../models/Enquiry");

// @desc    Create a new enquiry
// @route   POST /api/enquiries
// @access  Public
const createEnquiry = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      mobile,
      email,
      company,
      designation,
      city,
      enquiry,
      consentToMarketing,
    } = req.body;

    // Basic validation
    if (!firstName || !mobile || !email) {
      return res
        .status(400)
        .json({ message: "First name, mobile, and email are required." });
    }

    const newEnquiry = new Enquiry({
      firstName,
      lastName,
      mobile,
      email,
      company,
      designation,
      city,
      enquiry,
      consentToMarketing,
    });

    await newEnquiry.save();
    res.status(201).json({ message: "Enquiry submitted successfully!" });
  } catch (error) {
    console.error("❌ Error saving enquiry:", error.message);
    next(error); // Pass to error handler
  }
};

module.exports = { createEnquiry };
