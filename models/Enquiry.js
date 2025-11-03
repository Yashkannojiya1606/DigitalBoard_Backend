// models/Enquiry.js
const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, trim: true },
  mobile: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  company: { type: String, trim: true },
  designation: { type: String, trim: true },
  city: { type: String, trim: true },
  enquiry: { type: String, trim: true },
  consentToMarketing: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Enquiry', EnquirySchema);
