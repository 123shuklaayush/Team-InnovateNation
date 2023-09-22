const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  path: String,
  createdAt: {
    type: Date,
    default: Date.now, // Default value is the current date and time
  },
});


module.exports = mongoose.model('Pdf', pdfSchema);
