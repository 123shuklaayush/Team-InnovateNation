import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserDetailsContainer = styled(Container)({
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  marginTop: '20px',
});

const UserDetailsHeader = styled(Typography)({
  color: '#333',
  marginBottom: '20px',
});

const FileUploadContainer = styled('div')({
  display: 'flex',
  alignItems: 'flex-start', // Keep the file upload on the left
  justifyContent: 'space-between',
  marginTop: '20px',
  width: '100%', // Ensure full-width
});

const FileUploadButton = styled(Button)({
  margin: '0 auto', // Center the upload button
  display: 'block', // Ensure it's a block-level element
  marginTop: '10px', // Adjusted margin for spacing
});

const UploadText = styled(Typography)({
  fontSize: '1.2rem',
});

const SuccessMessage = styled(MuiAlert)({
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

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
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
            setOpen(true);
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
      <UserDetailsHeader variant="h4">User Data Submission</UserDetailsHeader>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="username"
            label="Username"
            fullWidth
            value={formData.username}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="email"
            label="Email"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="address"
            label="Address"
            fullWidth
            value={formData.address}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <FileUploadContainer>
        <label>
          <UploadText variant="h5">Upload Text File:</UploadText>
          <input type="file" onChange={handleFileInputChange} style={{ display: 'none' }} />
          <FileUploadButton variant="contained" component="span" startIcon={<CloudUploadIcon />}>
            Upload File
          </FileUploadButton>
        </label>
        {selectedFileName && (
          <Typography variant="body1">Selected File: {selectedFileName}</Typography>
        )}
      </FileUploadContainer>
      <div style={{ marginTop: '20px' }}>
        {isPDFSelected && (
          <Button variant="contained" onClick={handleUploadClick}>
            Upload
          </Button>
        )}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <SuccessMessage onClose={handleClose} severity="success">
            Upload Successful
          </SuccessMessage>
        </Snackbar>
      </div>
    </UserDetailsContainer>
  );
};

export default ClientAccess;
