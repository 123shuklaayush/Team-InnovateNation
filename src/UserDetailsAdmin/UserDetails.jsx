import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the ID from the URL
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const UserDetails = (props) => {
  const { id } = useParams(); // Get the ID from the URL
  const { rows } = props; // Access the rows data through props

  // Find the data for the clicked ID
  const rowData = rows.find((row) => row.id === id);

  // State to store the selected file name
  const [selectedFileName, setSelectedFileName] = useState('');

  // State to track if upload was successful
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // State to track if a PDF file is selected
  const [isPDFSelected, setIsPDFSelected] = useState(false);

  // Function to handle file input change
  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
      // Check if the file has a PDF extension
      if (selectedFile.name.toLowerCase().endsWith('.pdf')) {
        setIsPDFSelected(true);
      } else {
        setIsPDFSelected(false);
      }
    } else {
      setSelectedFileName(''); // Clear the selected file name if no file is selected
      setIsPDFSelected(false);
    }
  };

  // Function to handle the "Upload" button click
  const handleUploadClick = () => {
    // Check if a PDF file is selected
    if (isPDFSelected) {
      // Simulate a successful upload after a brief delay (you can replace this with your actual upload logic)
      setTimeout(() => {
        setUploadSuccess(true);
      }, 1000);
    } else {
      // Show an error message or take appropriate action if a non-PDF file is selected
      console.error('Please select a PDF file for upload.');
    }
  };

  return (
    <div>
      <h1>ID_No: {rowData.id}</h1>
      <p>Name: {rowData.name}</p>
      <p>Date: {rowData.date}</p>
      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Upload file
        <VisuallyHiddenInput
          type="file"
          onChange={handleFileInputChange} // Handle file input change
        />
      </Button>
      {selectedFileName && (
        <p>Selected File: {selectedFileName}</p>
      )}

      <div style={{ marginTop: '10px' }}>
        {isPDFSelected && (
          <Button variant="contained" onClick={handleUploadClick}>
            Upload
          </Button>
        )}
        {uploadSuccess && (
          <p style={{ color: 'green' }}>Upload successfully</p>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
