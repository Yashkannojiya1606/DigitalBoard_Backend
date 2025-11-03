const Enquiry = require('../models/Enquiry');

// @desc    Create a new enquiry
// @route   POST /api/enquiries
// @access  Public
const createEnquiry = async (req, res) => {
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
      return res.status(400).json({ message: 'First name, mobile, and email are required.' });
    }

    // Create a new enquiry record
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
    res.status(201).json({ message: 'Enquiry submitted successfully!' });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createEnquiry };
