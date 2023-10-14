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

const ContainerStyled = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '600px',
  margin: 'auto',
  padding: '30px',
  backgroundColor: '#f2f2f2',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
});

const FormStyled = styled('form')({
  width: '100%',
});

const TypographyStyled = styled(Typography)({
  color: '#333',
  marginBottom: '20px',
  textAlign: 'center',
  fontSize: '24px',
});

const DivStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  width: '100%',
});

const ButtonStyled = styled(Button)({
  margin: '20px 0',
});

const TypographyUpload = styled(Typography)({
  fontSize: '18px',
  fontWeight: 'bold',
});

const AlertStyled = styled(MuiAlert)({
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
    <ContainerStyled>
      <TypographyStyled variant="h1">Fill the Form to directly talk to our counsellor</TypographyStyled>
      <FormStyled>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="username"
              label="Username"
              fullWidth
              variant="outlined"
              value={formData.username}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="address"
              label="Address"
              fullWidth
              variant="outlined"
              value={formData.address}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              variant="outlined"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </FormStyled>
      <DivStyled>
        <label>
          <TypographyUpload variant="h2">Upload PDF File:</TypographyUpload>
          <input type="file" onChange={handleFileInputChange} style={{ display: 'none' }} />
          <ButtonStyled variant="contained" component="span" startIcon={<CloudUploadIcon />}>
            Upload File
          </ButtonStyled>
        </label>
        {selectedFileName && <Typography variant="body1">Selected File: {selectedFileName}</Typography>}
      </DivStyled>
      {isPDFSelected && (
        <ButtonStyled variant="contained" color="primary" onClick={handleUploadClick}>
          Upload
        </ButtonStyled>
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <AlertStyled onClose={handleClose} severity="success">
          Upload Successful
        </AlertStyled>
      </Snackbar>
    </ContainerStyled>
  );
};

export default ClientAccess;
