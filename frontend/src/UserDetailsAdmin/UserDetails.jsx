import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';

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
  const { id } = useParams();
  const { rows } = props;
  const rowData = rows.find((row) => row.id === id);

  const [selectedFileName, setSelectedFileName] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isPDFSelected, setIsPDFSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfData, setPdfData] = useState([]); // State to store retrieved PDF data

  useEffect(() => {
    // Make an Axios GET request to retrieve PDF data from the backend server
    axios.get('http://localhost:5000/get-pdfs') // Update the URL to include the backend server's URL and port
      .then((response) => {
        if (response.status === 200) {
          setPdfData(response.data);
        } else {
          console.error('Error fetching PDF data. Status:', response.status);
        }
      })
      .catch((error) => {
        console.error('Error fetching PDF data:', error);
      });
  }, []);
  // The empty dependency array ensures this runs once when the component mounts

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setSelectedFileName(file.name);
      if (file.name.toLowerCase().endsWith('.pdf')) {
        setIsPDFSelected(true);
      } else {
        setIsPDFSelected(false);
      }
    } else {
      setSelectedFile(null);
      setSelectedFileName('');
      setIsPDFSelected(false);
    }
  };

  const handleUploadClick = () => {
  if (isPDFSelected) {
    const formData = new FormData();
    formData.append('pdf', selectedFile); // Use the selectedFile from state

    axios.post('http://localhost:5000/upload-pdf', formData, { // Update the URL to include the backend server's URL and port
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setUploadSuccess(true);
      } else {
        console.error('Error uploading file to the server. Status:', response.status);
      }
    })
    .catch((error) => {
      console.error('Error uploading file:', error);
    });
  } else {
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
          onChange={handleFileInputChange}
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

      <div>
        {pdfData.map((pdf) => (
          <div key={pdf._id}>
            <p>PDF Filename: {pdf.filename}</p>
            <p>Original Filename: {pdf.originalname}</p>
            {/* Add more fields to display as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
