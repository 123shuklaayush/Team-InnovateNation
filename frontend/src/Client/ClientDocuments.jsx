import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const ClientDocuments = () => {
  const { id } = useParams();
  const [pdfData, setPdfData] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to retrieve PDF data from the backend server
    axios.get(`http://localhost:5000/get-pdfs`) // Update the URL to include the backend server's URL and port
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

  const handleDownloadPDF = (filename) => {
    // Make a request to the backend to download the PDF
    axios.get(`http://localhost:5000/download-pdf/${filename}`, {
      responseType: 'blob', // Set the response type to 'blob' to handle binary data
    })
    .then((response) => {
      // Create a Blob object from the binary data
      const blob = new Blob([response.data], { type: 'application/pdf' });

      // Create a download link for the Blob
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename; // Set the filename for the download
      link.click();

      // Clean up by revoking the Blob URL
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error('Error downloading PDF:', error);
    });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginBottom: '20px' }}>
        Upload Details for ID: 1b941h3c3
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>PDF Filename</TableCell>
              <TableCell>Download Entire PDF</TableCell>
              <TableCell>View Summarised PDF</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {pdfData.map((pdf) => (
              <TableRow key={pdf._id}>
                <TableCell>{pdf.filename}</TableCell>
                <TableCell>
                  <Button style={{backgroundColor:"#01a7e9", color:"white"}}
                    variant="outlined"
                    color="primary"
                    onClick={() => handleDownloadPDF(pdf.filename)}
                  >
                    Download
                  </Button>
                </TableCell>
                <TableCell>
                  <Button style={{backgroundColor: "green", color: "white"}}
                    variant="outlined"
                    color="primary"
                    onClick={() => handleDownloadPDF(pdf.filename)
                    }
                  >
                    Download
                  </Button>
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ClientDocuments;
