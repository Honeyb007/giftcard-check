const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  code:          { type: String, required: true },
  imagePath:     { type: String, default: null },  // optional — user may submit code only
  status:        { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  verifiedBy:    { type: String, default: null },
  resultMessage: { type: String },
  createdAt:     { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submission', submissionSchema);