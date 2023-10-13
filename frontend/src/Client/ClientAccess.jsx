import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

const ClientAccess = () => {
  const [selectedFileName, setSelectedFileName] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isPDFSelected, setIsPDFSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUploadClick = () => {
    if (isPDFSelected) {
      const form = new FormData();
      form.append('pdf', selectedFile);
      form.append('username', formData.username);
      form.append('email', formData.email);
      form.append('address', formData.address);
      form.append('phoneNumber', formData.phoneNumber);

      axios
        .post('http://localhost:5000/submit-user-data', form, {
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
      <UserDetailsHeader>User Data Submission</UserDetailsHeader>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleInputChange}
      />

      <UploadButton component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Upload File
        <input type="file" onChange={handleFileInputChange} style={{ display: 'none' }} />
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
        {uploadSuccess && <SuccessMessage>Upload Successful</SuccessMessage>}
      </div>
    </UserDetailsContainer>
  );
};

export default ClientAccess;
