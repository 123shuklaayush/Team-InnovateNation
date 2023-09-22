import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';

const UserDetailsContainer = styled('div')({
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
});

const UserDetailsHeader = styled('h2')({
  color: '#333',
});

const UserDetailsText = styled('p')({
  margin: '5px 0',
});

const UploadButton = styled(Button)({
  marginTop: '10px',
});

const SuccessMessage = styled('p')({
  color: 'green',
  marginTop: '10px',
});

const UserDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get('name');
  const date = queryParams.get('date');
  const nextDate = queryParams.get('nextDate');
  const lawyer = queryParams.get('lawyer');
  const judge = queryParams.get('judge');

  const [selectedFileName, setSelectedFileName] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isPDFSelected, setIsPDFSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

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
      formData.append('pdf', selectedFile);

      axios.post('http://localhost:5000/upload-pdf', formData, {
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
    <UserDetailsContainer>
      <UserDetailsHeader>Case ID: {id}</UserDetailsHeader>
      <UserDetailsText>Name: {name}</UserDetailsText>
      <UserDetailsText>Starting Date: {date}</UserDetailsText>
      <UserDetailsText>Next Hearing Date: {nextDate}</UserDetailsText>
      <UserDetailsText>Lawyer: {lawyer}</UserDetailsText>
      <UserDetailsText>Judge: {judge}</UserDetailsText>
      
      <UploadButton component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Upload File
        <input
          type="file"
          onChange={handleFileInputChange}
          style={{ display: 'none' }}
        />
      </UploadButton>
      {selectedFileName && (
        <UserDetailsText>Selected File: {selectedFileName}</UserDetailsText>
      )}

      <div style={{ marginTop: '10px' }}>
        {isPDFSelected && (
          <Button variant="contained" onClick={handleUploadClick}>
            Upload
          </Button>
        )}
        {uploadSuccess && (
          <SuccessMessage>Upload Successful</SuccessMessage>
        )}
      </div>

      <Link to={`/upload-details/${id}`} style={{ marginTop: '10px', display: 'block' }}>
        <Button variant="contained" color="primary">
          View Upload Details
        </Button>
      </Link>
    </UserDetailsContainer>
  );
};

export default UserDetails;
