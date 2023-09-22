// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Pdf = require('./pdf'); // Import the Pdf schema (adjust the path as needed)
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

// Replace with your MongoDB Atlas connection string, username, and password
const mongoDBURI =
  'mongodb+srv://123shuklaayush:Ayush123@cluster1.y1bi7ce.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Files will be stored in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  },
});

const upload = multer({ storage });

// Handle file uploads
app.post('/upload-pdf', upload.single('pdf'), async (req, res) => {
  try {
    
    const { filename, originalname, path } = req.file;
    const pdf = new Pdf({ filename, originalname, path });
    await pdf.save();
    res.status(200).send('PDF uploaded successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading PDF.');
  }
});

// Retrieve PDF data
app.get('/get-pdfs', async (req, res) => {
  try {
    const pdfs = await Pdf.find();
    res.status(200).json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching PDF data.');
  }
});

app.delete('/delete-pdf/:pdfId', async (req, res) => {
  try {
    const pdfId = req.params.pdfId;
    // Use Mongoose to find and remove the PDF by its ID
    await Pdf.findByIdAndRemove(pdfId);
    res.status(200).send('PDF deleted successfully.');
  } catch (error) {
    console.error('Error deleting PDF:', error);
    res.status(500).send('Error deleting PDF.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
