const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  path: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Pdf', pdfSchema);
