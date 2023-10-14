import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Button from '@mui/material/Button';
import axios from 'axios';

const Orders = () => {
  const [pdfData, setPdfData] = useState([]);

  useEffect(() => {
    // Fetch PDF data from your server
    axios.get('http://localhost:5000/get-pdf-data')
      .then((response) => {
        setPdfData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching PDF data:', error);
      });
  }, []);

  const rowStyle = {
    cursor: 'pointer',
    height: '3rem',
    transition: 'background-color 0.3s',
  };

  const cellStyle = {
    fontSize: '1rem',
  };

  const handleRowHover = (event) => {
    event.currentTarget.style.backgroundColor = 'lightSkyBlue';
  };

  const handleRowHoverExit = (event) => {
    event.currentTarget.style.backgroundColor = '';
  };

  const shortenID = (id, length) => {
    return id.slice(-length);
  };

  const shortenEmail = (email, maxLength) => {
    if (email.length > maxLength) {
      return email.substring(0, maxLength) + '...';
    }
    return email;
  };

  const handleDelete = (pdfDocument) => {
    // Send a DELETE request to delete the PDF data
    axios.delete(`http://localhost:5000/delete-pdf/${pdfDocument._id}`)
      .then(() => {
        // After successful deletion, refresh the data
        setPdfData(pdfData.filter(item => item._id !== pdfDocument._id));
      })
      .catch((error) => {
        console.error('Error deleting PDF data:', error);
      });
  };

  return (
    <React.Fragment>
      <Title>Recent Cases</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell style={cellStyle}>ID_No</TableCell>
            <TableCell style={cellStyle}>Username</TableCell>
            <TableCell style={cellStyle}>Email</TableCell>
            <TableCell style={cellStyle}>Phone Number</TableCell>
            <TableCell style={cellStyle}>Date</TableCell>
            <TableCell style={cellStyle}>Time</TableCell>
            <TableCell style={cellStyle}>Download Data</TableCell>
            <TableCell style={cellStyle}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pdfData.map((pdfDocument) => (
            <TableRow
              key={pdfDocument._id}
              style={rowStyle}
              onMouseEnter={handleRowHover}
              onMouseLeave={handleRowHoverExit}
            >
              <TableCell style={cellStyle}>
                <a href={`http://localhost:5000/download-document/${pdfDocument.filename}`}>
                  {shortenID(pdfDocument._id, 6)}
                </a>
              </TableCell>
              <TableCell style={cellStyle}>{pdfDocument.username}</TableCell>
              <TableCell style={cellStyle} title={pdfDocument.email}>
                {shortenEmail(pdfDocument.email, 20)}
              </TableCell>
              <TableCell style={cellStyle}>{pdfDocument.phoneNumber}</TableCell>
              <TableCell style={cellStyle}>
                {new Date(pdfDocument.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell style={cellStyle}>
                {new Date(pdfDocument.createdAt).toLocaleTimeString()}
              </TableCell>
              <TableCell style={cellStyle}>
                <a
                  href={`http://localhost:5000/download-document/${pdfDocument.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="contained" color="primary">Download</Button>
                </a>
              </TableCell>
              <TableCell style={cellStyle}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: '#f66161', color: '#fff' }}
                  onClick={() => handleDelete(pdfDocument)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default Orders;
