// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Pdf = require('./pdf'); // Import the Pdf schema (adjust the path as needed)
const cors = require('cors');
const fs = require('fs');
const path = require('path');


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
  
  // Modify the Mongoose schema to include user information
  const pdfSchema = new mongoose.Schema({
    username: String,
    email: String,
    address: String,
    phoneNumber: String,
    filename: String,
    originalname: String,
    path: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  // Create a new POST endpoint to handle user data submission
  app.post('/submit-user-data', upload.single('pdf'), async (req, res) => {
    try {
      const { filename, originalname, path } = req.file;
      const { username, email, address, phoneNumber } = req.body;
      const pdf = new Pdf({
        username,
        email,
        address,
        phoneNumber,
        filename,
        originalname,
        path,
      });
      await pdf.save();
      res.status(200).send('User data and PDF uploaded successfully.');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error uploading user data and PDF.');
    }
  });
  
  // Define a new GET endpoint to fetch PDF data
  app.get('/get-pdf-data', async (req, res) => {
    try {
      const pdfData = await Pdf.find(); // Fetch all documents from the 'Pdf' collection
      res.json(pdfData);
    } catch (error) {
      console.error('Error fetching PDF data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.get('/download-document/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', filename);
  
    // Check if the file exists
    if (fs.existsSync(filePath)) {
      // Set the appropriate headers for the download
      res.setHeader('Content-Disposition', 'attachment; filename=' + filename);
      res.setHeader('Content-Type', 'application/pdf');
  
      // Create a read stream from the file and pipe it to the response
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    } else {
      res.status(404).send('File not found');
    }
  });
  
  // Define a new DELETE endpoint to delete PDF data by ID
  app.delete('/delete-pdf/:id', async (req, res) => {
    const pdfId = req.params.id;
    try {
      await Pdf.findByIdAndRemove(pdfId);
      res.status(200).send('PDF data deleted successfully.');
    } catch (error) {
      console.error('Error deleting PDF data:', error);
      res.status(500).send('Error deleting PDF data.');
    }
  });
  
  // Other routes, such as retrieving and managing user data, should be added here
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });